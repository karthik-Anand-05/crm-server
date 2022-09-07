import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import Users from '../models/auth/loginModel.js';

export const signInAuth = async (req, res) => {
    const { username, password } = req.body;
    try {
        const oldUser = await Users.findOne({
            where: {
                username
            }
        })
        if (!oldUser) return res.status(404).json({ message: "User doesn't" });
        const isPassword = await bcrypt.compare(password, oldUser.password);
        if (!isPassword) return res.status(400).json({ message: "Invalid Password" });
        const token = jwt.sign({ email: oldUser.email, id: oldUser.id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "1hr" });
        res.status(200).json({ result: oldUser, token });
    } catch (error) {
        res.status(401).json({ message: "Something went wrong" });
        console.log(error)
    }
}

export const signUpAuth = async (req, res) => {
    const { username, password, role } = req.body;
    try {
        const oldUser = await Users.findOne({
            where: {
                username
            }
        })
        if (oldUser) return res.status(409).json({ message: "User already exist" });
        const hashPassword = await bcrypt.hash(password, 10);
        const result = await Users.create({ username, name: `${firstname} ${lastname}`, email, password: hashPassword, role, profileImage })
        const token = jwt.sign({ email: result.email, id: result._id }, 'secret', { expiresIn: "1hr" });
        res.status(201).json({ result, token })
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
        console.log(error);
    }
}




// Ref
export const changePassword = async (req, res) => {
    const { id } = req.params;
    const { password } = req.body;
    const user = await Users.findOne({
        where: id
    })
    const hashPassword = await bcrypt.hash(password, 10);
    const updatePassword = { password: hashPassword, id: id };
    await user.update({ password: hashPassword });

    res.json(updatePassword);
}