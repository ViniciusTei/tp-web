const { Sequelize } = require('sequelize');

const Login = require('./model/login');
const Cidade = require('./model/cidade');

const sequelize = new Sequelize('ecommerce', 'root', '', {
  host: '35.199.91.28',
  dialect: 'mysql',
});

Login.init(sequelize);
Cidade.init(sequelize);

module.exports = sequelize;