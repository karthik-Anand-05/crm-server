import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import Users from '../models/users.js';

export const signInAuth = async (req, res) => {
    const { email, password } = req.body;
    try {
        const oldUser = await Users.findOne({
            where: {
                email
            }
        })
        if (!oldUser) return res.status(404).json({ message: "User doesn't" });
        const isPassword = await bcrypt.compare(password, oldUser.password);
        if (!isPassword) return res.status(400).json({ message: "Invalid Password" });
        const token = jwt.sign({ email: oldUser.email, id: oldUser.id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "50s" });
        res.status(200).json({ result: oldUser, token });
    } catch (error) {
        res.status(401).json({ message: "Something went wrong" });
        console.log(error)
    }
}

export const signUpAuth = async (req, res) => {
    const { email, password, firstname, lastname, role, profileImage } = req.body;
    try {
        const oldUser = await Users.findOne({
            where: {
                email
            }
        })
        if (oldUser) return res.status().json({ message: "User already exist" });
        const hashPassword = await bcrypt.hash(password, 10);
        const result = await Users.create({ username: `${firstname} ${lastname}`, email, password: hashPassword, role, profileImage })
        const token = jwt.sign({ email: result.email, id: result._id }, 'secret', { expiresIn: "1hr" });
        res.status(201).json({ result, token })
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
        console.log(error);
    }

}
