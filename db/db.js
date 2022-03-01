const mysql = require("mysql2/promise");
const deconfig = require("./dbconfig.json");

const pool = mysql.createPool(deconfig);

module.exports = pool;
