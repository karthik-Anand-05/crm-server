import DataTypes from 'sequelize';
import sequelize from '../../config/db.config.js';

const cityModel = sequelize.define('cities', {
    cityName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    state_id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
    }
}, { timestamps: false, underscored: true })