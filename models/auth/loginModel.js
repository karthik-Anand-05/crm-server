import DataTypes from 'sequelize';
import sequelize from '../../config/db.config.js';

const loginModel = sequelize.define('login', {
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
    role_id: {
        type: DataTypes.UUID,
        allowNull: false,
        unique: true,
        defaultValue: DataTypes.UUIDV4,
    },
},
    {
        freezeTableName: true,
        timestamps: false,
        underscored: true
    }
)


export default loginModel;