const { Model, DataTypes } = require('sequelize');

class Produto extends Model {
  static init(sequelize) {
    super.init({
      idProduto: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      descricaoProduto: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      estoqueProduto: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      precoCusto: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      precoVenda: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      idFabricante: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    }, {
      sequelize,
      tableName: 'produto',
      timestamps: false
    })
  }

  static associate(models) {
    this.belongsTo(models.Fabricante, { foreignKey: 'idFabricante', as: 'fabricante' })
  }
}

module.exports = Produto;
