import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import user from '../models/users/user_model.js'
import { generateAccessToken, generateRefreshToken } from '../helpers/jwt_helper.js';

let refreshTokens = [];

export const signInAuth = async (req, res) => {
    const { username, password } = req.body;
    try {
        const oldUser = await user.findOne({
            where: {
                username
            }
        })
        if (!oldUser) return res.status(404).json({ message: "User doesn't" });
        const isPassword = await bcrypt.compare(password, oldUser.password);
        if (!isPassword) return res.status(400).json({ message: "Invalid Password" });

        const userdata = {
            username: oldUser.username,
            user_id: oldUser.user_id
        };
        const accessToken = await generateAccessToken(userdata);
        const refreshToken = await generateRefreshToken(userdata);
        refreshTokens.push(refreshToken);
        res.status(200).json({ accessToken, refreshToken });
    } catch (error) {
        res.status(401).json({ message: "Something went wrong" });
        console.log(error)
    }
}

export const signUpAuth = async (req, res) => {
    const { username, email_id, password } = req.body;
    try {
        const oldUser = await user.findOne({
            where: {
                username
            }
        })
        if (oldUser) return res.status(409).json({ message: "User already exist" });
        const hashPassword = await bcrypt.hash(password, 10);
        const result = await user.create({ username, email_id, password: hashPassword, });

        const userdata = {
            username: result.username,
            user_id: result.user_id
        };
        const accessToken = generateAccessToken(userdata);
        const refreshToken = generateRefreshToken(userdata);
        refreshTokens.push(refreshToken)
        res.status(201).json({ accessToken, refreshToken })
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
        console.log(error);
    }
}

export const tokenAuth = async (req, res) => {
    const { token } = req.body;
    try {
        if (token === null) return res.sendStatus(401)

        if (!refreshTokens.includes(token)) return res.sendStatus(403)

        jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
            if (err) return res.sendStatus(403)
            const accessToken = generateAccessToken({ username: decoded?.username })

            res.json({ accessToken: accessToken })
        })
    } catch (err) {
        res.status(401).json({ message: err.message });
    }
}


export const logoutAuth = async (req, res) => {
    const { token } = req.body;
    refreshTokens = refreshTokens.filter(data => {
        data !== token
    })
    res.sendStatus(205).json({ message: "Successfully Logged out" })
}











