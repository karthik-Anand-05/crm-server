import pg from 'pg';
const pool = new pg.Pool({
    user: 'postgres',
    password: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'crud_db',

})

export default pool;