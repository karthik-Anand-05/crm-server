import Sequelize from "sequelize";
const sequelize = new Sequelize(
    'crud_db',
    'postgres',
    'postgres',
    {
        dialect: 'postgres',
        host: 'localhost'
    }
)
export default sequelize;