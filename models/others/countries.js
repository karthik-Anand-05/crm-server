import DataTypes from 'sequelize';
import sequelize from '../../config/db.config.js';

const countryModel = sequelize.define('countries', {
    countryName: {
        type: DataTypes.STRING(150),
        allowNull: false
    },
    countryCode: {
        type: DataTypes.CHAR(3),
        allowNull: false
    },
    phoneCode: {
        type: DataTypes.INTEGER(11),
        allowNull: false
    }
}, {
    timestamps: false,
    underscored: true
});
export default countryModel;