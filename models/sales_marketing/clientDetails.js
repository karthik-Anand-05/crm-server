import { DataTypes } from 'sequelize';
import sequelize from '../../config/db.config.js';

const clientDetails = sequelize.define('clientDetails', {
    client_id: {
        primaryKey: true,
        type: DataTypes.UUID,
        allowNull: false,
        unique: true,
        defaultValue: DataTypes.UUIDV4
    },
    company_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email_id: {
        type: DataTypes.STRING,
        allowNull: false
    },
    contact_no: {
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
    requirement_details: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    company_address: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, { updatedAt: false })

export default clientDetails;