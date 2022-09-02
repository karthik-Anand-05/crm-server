import { DataTypes } from 'sequelize';
import sequelize from '../config/db.config.js';

const Users = sequelize.define('users', {
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        allowNull: false,
        unique: true,
        defaultValue: DataTypes.UUIDV4
    },
    username: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true

    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false,
    },
},
    { updatedAt: false }
)
export default Users;