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

  // relacao one-to-many com fabricante
  // um produto pode pertencer apenas a um fabricante
  // ------
  // relacao one-to-many com item
  // um produto pode pertencer a varios itens
  static associate(models) {
    this.belongsTo(models.Fabricante, { foreignKey: 'idFabricante', as: 'fabricante' })
    this.hasMany(models.Item, { foreignKey:'idProduto', as: 'produto' })
  }
}

module.exports = Produto;
