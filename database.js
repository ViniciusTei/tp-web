const { Sequelize } = require('sequelize');
const { DB_HOST } = require("./config/config");

const Login = require('./model/login');
const Cidade = require('./model/cidade');

const config = {
  dialect: 'mysql',
  dialectOptions: {
    socketPath: DB_HOST
  }
}

const devConfig = {
  host: DB_HOST,
  dialect: 'mysql',
}

const sequelize = new Sequelize('ecommerce', 'root', '', process.env.PRODUCTION ? config : devConfig);

Login.init(sequelize);
Cidade.init(sequelize);

module.exports = sequelize;