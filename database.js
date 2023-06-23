const mysql = require('mysql');

const Connection = {
  getDb() {
    try {
      const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'ecommerce',
        port: 3306
      })
      
      connection.connect()

      return connection
    } catch (error) {
      console.error('Error trying to connect to MySql database!')
      throw new Error('Error trying to connect to MySql database!')
    }
  }
}

module.exports = Connection;