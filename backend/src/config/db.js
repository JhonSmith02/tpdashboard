const sql = requier('mssql');
require('dotev').config();

const config = {
    user: process.env.BD_USER,
    password: process.env.BD_PASS,
    server: process.env.DB_HOST,
    database: process.env.DB_NAME,
}

const poolPromise = new sql.ConnectionPool(config)
    .connect()
    .then(pool => {
        console.log('Se conecto a SQl');
        return pool;
    })
    .catch (err => console.log('Error de conexion SQL', err));

    module.exports = {
        sql, poolPromise
    };