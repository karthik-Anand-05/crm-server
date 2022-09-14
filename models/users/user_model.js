import DataTypes from 'sequelize';
import sequelize from '../../config/db.config.js';

const user = sequelize.define('login', {
    user_id: {
        primaryKey: true,
        type: DataTypes.UUID,
        allowNull: false,
        unique: true,
        defaultValue: DataTypes.UUIDV4,
    },
    username: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true

    },
    email_id: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    isAdmin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
},
    {
        freezeTableName: true,
        timestamps: false,
        underscored: true
    }
)

export default user;