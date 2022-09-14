import DataTypes from 'sequelize'
import sequelize from '../../config/db.config.js';

const salesPersonModel = sequelize.define('salesPersons', {
    employeeId: {
        primaryKey: true,
        type: DataTypes.UUID,
        allowNull: false,
        unique: true,
        defaultValue: DataTypes.UUIDV4,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    age: {
        type: DataTypes.NUMBER,
        allowNull: false,
    },
    dob: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    emailId: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true,
        }
    },
    contactNumber: {
        type: DataTypes.NUMBER,
        allowNull: false,
        validate: {
            is: '/^+ (?: [0-9] ?) {6,14} [0-9]$/'
        }
    },
    exprience: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    qualification: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    reporting_manager: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, { timestamps: false, underscored: true })

export default salesPersonModel;