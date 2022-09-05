import jwt from 'jsonwebtoken';

const auth = async (req, res, next) => {
    try {
        const authHeader = req.headers['Authorization'];
        const token = authHeader && authHeader.split(" ")[1];
        const isCustomAuth = token.length < 500;
        let decodedData;
        if (token && isCustomAuth) {
            decodedData = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
            req.id = decodedData?.id;
        }
        else {
            decodedData = jwt.verify(token);
            req.id = decodedData?.sub;
        }
        next();

    }
    catch (error) {
        res.status(401).json({ message: error.message })
    }
}