import Sequelize from "sequelize";
const sequelize = new Sequelize('crm_db', 'postgres', 'postgres',
    {
        dialect: 'postgres',
        host: 'localhost',
        port: 5432,
        logging: false,   
    }
)
export default sequelize;