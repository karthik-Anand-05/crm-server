import DataTypes from "sequelize";
import sequelize from '../../config/db.config.js';
const projectDetailModel = sequelize.define('projectDetails', {
    projectId: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,

    },
    projectType: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    projectRequirements: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    projectDescription: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    projectBudget: {
        type: DataTypes.DECIMAL(12, 2),
        allowNull: false,
    },
    date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    }
}, {
    timestamps: false,
    underscored: true
})



export default projectDetailModel;