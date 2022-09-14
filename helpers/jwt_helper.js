import jwt from 'jsonwebtoken';

export async function generateAccessToken(user) {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "1hr" }
    );
}

export async function generateRefreshToken(user) {
    return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET);
}

export async function verifyRefreshToken(refreshToken) {
    jwt.verify(refreshToken,process.env.REFRESH_TOKEN_SECRET,(err,decoded)=>{
        if(err) throw err;
        const user=decoded.aud;
    })
}