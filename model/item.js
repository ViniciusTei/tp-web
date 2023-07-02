const { Model, DataTypes } = require('sequelize');

class Item extends Model {
  static init(sequelize) {
    super.init({
      idItem: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      idVenda: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      idProduto: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      quantidadeItem: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }
    }, {
      sequelize,
      tableName: 'item',
      timestamps: false
    })
  }

  static associate(models) {
    this.belongsTo(models.Vendas, { foreignKey: 'idVenda', as: 'venda' })
    this.belongsTo(models.Produto, { foreignKey: 'idProduto', as: 'produto' })
  }
}

module.exports = Item;
