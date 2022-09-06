import DataTypes from 'sequelize';
import sequelize from '../../config/db.config.js';

const stateModel = sequelize.define('states', {
    stateName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    country_id: {
        type: DataTypes.INTEGER(11),
        defaultValue: 1
    }
})

export default stateModel;
