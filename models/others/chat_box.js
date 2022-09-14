import DataTypes from 'sequelize';
import sequelize from '../../config/db.config.js';

const chatBoxModel = sequelize.define('chatbox', {
    chatboxId: {
        type: DataTypes.INTEGER(11),
        allowNull: false
    },
    fromUserId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    fromUser: {
        type: DataTypes.STRING,
        allowNull: false
    },
    toUserId: {
        type: DataTypes.INTEGER(11),
        allowNull: false
    },
    message: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false
    }
}, { updatedAt: false, underscored: true, freezeTableName: true })


export default chatBoxModel;