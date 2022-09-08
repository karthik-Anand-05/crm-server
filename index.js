import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/user.js';
import dotenv from 'dotenv';
import sequelize from './config/db.config.js';
import cors from 'cors';

dotenv.config();
const PORT = process.env.PORT || 5000
const app = express();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req, res) => {
    res.json({ message: 'Hello Api' });
})

try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}
await sequelize.sync({ alter: { drop: false } });

app.use('/users', userRoutes)

app.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`Server running on ${PORT}`);
})