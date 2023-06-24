const { Sequelize } = require('sequelize');
require("dotenv").config();

const Login = require('./model/login');
const Cidade = require('./model/cidade');

const sequelize = new Sequelize('ecommerce', 'root', '', {
  host: process.env.MYSQL_HOST,
  dialect: 'mysql',
});

Login.init(sequelize);
Cidade.init(sequelize);

module.exports = sequelize;