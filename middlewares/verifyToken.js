import jwt from "jsonwebtoken";

export const verifyAccessToken = (req, res, next) => {
    const token = req.headers['Authorization'].split(' ')[1];
    if (token) {
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
            if (err) return res.status(401).json({ message: err.message })
            req.decoded = decoded;
            next();
        })
    }
}
