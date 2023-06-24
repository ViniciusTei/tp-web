const { Sequelize } = require('sequelize');
require("dotenv").config();

const Login = require('./model/login');
const Cidade = require('./model/cidade');

const config = {
  dialect: 'mysql',
  dialectOptions: {
    socketPath:  process.env.MYSQL_HOST
  }
}

const devConfig = {
  host: process.env.MYSQL_HOST,
  dialect: 'mysql',
}

const sequelize = new Sequelize('ecommerce', 'root', '', process.env.PRODUCTION ? config : devConfig);

Login.init(sequelize);
Cidade.init(sequelize);

module.exports = sequelize;