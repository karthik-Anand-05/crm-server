import { DataTypes } from 'sequelize';
import sequelize from '../config/sequelize.config.js';

const Users = sequelize.define('Users', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,

    },
    email: {
        type: DataTypes.TEXT,
        isUnique: true,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    profileImage: {
        type: DataTypes.STRING,
        allowNull: false,
    }
})
await Users.sync();
export default Users;