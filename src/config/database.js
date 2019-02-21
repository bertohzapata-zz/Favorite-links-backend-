const mysql = require('mysql');
const { database } = require('./keys');
const { promisify } = require('util');

const pool = mysql.createPool(database);

pool.getConnection((err, connection) => {
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('-> DATABASE CONNECTION WAS CLOSED!');
        }
        if (err.code === 'ER_CON_COUT_ERROR') {
            console.error('-> DATABASE HAS TO MANY CONNECTIONS!')
        }
        if (err.code === 'ECONNREFUSED') {
            console.error('-> DATABSE CONNECTION WAS REFUSED');
        }
    }

    if(connection) connection.release();
    console.log('\x1b[36m', '-> DATABASE IS CONNECTED');
    return;
});

// Promisify pool querys ( callbacks to promises)
pool.query = promisify(pool.query);

module.exports = pool;