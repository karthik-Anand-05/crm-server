import DataTypes from 'sequelize'
import sequelize from '../../config/db.config.js'

const employeeProjectModel = sequelize.define('employeeProjects', {
    employeeId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    projectId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
    },
    projectName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    projectType: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    startDate: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    endDate: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    projectStatus: {
        type: DataTypes.STRING(10),
        allow
    }

}, {
    timestamps: false,
    underscored: true
})