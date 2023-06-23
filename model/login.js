const { DataTypes } = require('sequelize');
const database = require('../database');

const sequelize = database.getDb();

const Login = sequelize.define('login', {
  loginId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  emailCliente: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  senhaCliente: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nivelAcesso: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'login'
});

module.exports = Login;
