const { Model, DataTypes } = require('sequelize');

class Fabricante extends Model {
  static init(sequelize) {
    super.init({
      fabricanteId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      nomeFabricante: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      siteFabricante: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    }, {
      sequelize,
      tableName: 'fabricante',
      timestamps: false
    })
  }

  static associate(models) {
    this.hasMany(models.Produto, { foreignKey: 'idFabricante', as: 'fabricante' })
  }
}

module.exports = Fabricante;
