import Sequelize from "sequelize";
const sequelize = new Sequelize(
    'crm_db',
    'postgres',
    'postgres',
    {
        dialect: 'postgres',
        host: 'localhost'
    }
)
export default sequelize;