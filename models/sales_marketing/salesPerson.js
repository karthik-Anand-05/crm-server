import { DataTypes } from "sequelize";
import sequelize from '../../config/db.config.js';

const salesPersons = sequelize.define('salesPersons', {
    employee_id: {
        primaryKey: true,
        type: DataTypes.UUID,
        allowNull: false,
        unique: true,
        defaultValue: DataTypes.UUIDV4
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
})