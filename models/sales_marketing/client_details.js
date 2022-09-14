import DataTypes from 'sequelize';
import sequelize from '../../config/db.config.js';

const clientDetailModel = sequelize.define('clientDetails', {
    clientId: {
        primaryKey: true,
        type: DataTypes.UUID,
        allowNull: false,
        unique: true,
        defaultValue: DataTypes.UUIDV4
    },
    companyName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    emailId: {
        type: DataTypes.STRING,
        allowNull: false
    },
    contactNo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    country: {
        type: DataTypes.STRING,
        allowNull: false
    },
    state: {
        type: DataTypes.STRING,
        allowNull: false
    },
    requirementDetails: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    companyAddress: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, { timestamps: false })

export default clientDetailModel;


// h