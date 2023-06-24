const { Model, DataTypes } = require('sequelize');

class Cidade extends Model {
  static init(sequelize) {
    super.init({
      cidadeId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      codigoCidade: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      nomeCidade: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      estadoCidade: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    }, {
      sequelize,
      tableName: 'cidade',
      timestamps: false
    })
  }
}

module.exports = Cidade;
