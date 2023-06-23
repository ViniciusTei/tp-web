const { Model, DataTypes } = require('sequelize');

class Login extends Model {
  static init(sequelize) {
    super.init({
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
      sequelize,
      tableName: 'login',
    })
  }
}

module.exports = Login;
