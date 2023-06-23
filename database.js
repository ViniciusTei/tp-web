const { Sequelize } = require('sequelize');

const Login = require('./model/login');

const sequelize = new Sequelize('ecommerce', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306
})

Login.init(sequelize)

module.exports = sequelize;