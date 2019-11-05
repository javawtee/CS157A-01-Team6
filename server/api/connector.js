const mysql = require('mysql')

const connection = mysql.createPool(require('./configs/mysql_config'))

module.exports = connection
