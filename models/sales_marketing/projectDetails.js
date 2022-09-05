import { DataTypes } from "sequelize";
import sequelize from '../../config/db.config.js';
import clientDetails from "./clientDetails.js";
const projectDetails = sequelize.define('projectDetails', {
    project_id: {
        primaryKey: true,
        type: DataTypes.UUID,
        allowNull: false,
        unique: true,
        defaultValue: DataTypes.UUIDV4
    },
    project_type: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    project_requirements: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    project_description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    project_budget: {
        type: DataTypes.DECIMAL(12, 2),
        allowNull: false,
    },
    date: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    }
})
projectDetails.belongsTo(clientDetails, {
    foreignKey: {
        name: 'client_id',
        type: DataTypes.UUID
    }
})