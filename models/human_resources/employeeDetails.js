import DataTypes from 'sequelize';
import sequelize from '../../config/db.config.js';

const employeeDetailModel = sequelize.define('employeeDetails', {
    employeeId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    employeeName: {
        type: DataTypes.STRING(70),
        allowNull: false,
    },
    contactNo: {
        type: DataTypes.NUMBER,
        allowNull: false,
        validate: {
            is: '/^+ (?: [0-9] ?) {6,14} [0-9]$/'
        }
    },
    qualification: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    jobTitle: {
        type: DataTypes.STRING,
        allowNull: false
    },
    roleId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
    },
    departmentId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    dateOfBirth: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    gender: {
        type: DataTypes.ENUM('M', 'F', 'O'),
        allowNull: false
    },
    joiningDate: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    employeeType: {
        type: DataTypes.STRING(24),
        allowNull: false
    },
    EmployeeStatus: {
        type: DataTypes.STRING,
        allowNull: false
    },
    documentFile: {
        type: DataTypes.TEXT,
        allowNull: false
    },

}, {
    timestamps: false,
    underscored: true
})

export default employeeDetailModel;