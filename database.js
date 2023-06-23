const { Sequelize } = require('sequelize');

const Connection = {
  getDb() {

    try {
      const sequelize = new Sequelize('ecommerce', 'root', '', {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
      })
      
      sequelize.authenticate()

      return sequelize
    } catch (error) {
      console.error('Error trying to connect to MySql database!')
      throw new Error('Error trying to connect to MySql database!')
    }
  }
}

module.exports = Connection;