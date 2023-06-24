const { Sequelize } = require('sequelize');

const Login = require('./model/login');
const Cidade = require('./model/cidade');

const sequelize = new Sequelize('ecommerce', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306
});

Login.init(sequelize);
Cidade.init(sequelize);

module.exports = sequelize;