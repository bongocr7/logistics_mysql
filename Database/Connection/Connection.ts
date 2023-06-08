const mysql = require('mysql');
const config = require('../../Config/Database/Mysql');

const connection = mysql.createConnection(config);

module.exports = connection;
