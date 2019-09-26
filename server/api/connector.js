const mysql = require('mysql')

var connConfig = {
    host: '127.0.0.1',
    user: 'root', // update this to match your local mysql user
    password: '123456', // update this to match your local mysql password for user
    database: 'cs157a_project',
    // connectionLimit: 20,
    port: 3306,
    strict: false,
}

const connection = mysql.createPool(connConfig)

module.exports = connection
