const mysql = require('mysql2');
const dbConfig = require('./db.config.js');

const connection = mysql.createPool({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    database: dbConfig.DATABASE,
    password: dbConfig.PASSWORD,
    port: dbConfig.PORT,  
});

module.exports = connection.promise();