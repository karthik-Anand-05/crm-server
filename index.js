import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/users.js';
import dotenv from 'dotenv';
dotenv.config();
const PORT = process.env.PORT || 5000
const app = express();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.json({ message: 'Hello Api' });
})

app.use('/users', userRoutes)
app.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`Server running on ${PORT}`);
})