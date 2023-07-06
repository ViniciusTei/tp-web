const { Model, DataTypes } = require('sequelize');

class Vendas extends Model {
  static init(sequelize) {
    super.init({
      idVendas: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      idCliente: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      dataVenda: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      valorTotal: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      valorPago: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      desconto: {
        type: DataTypes.FLOAT,
      }
    }, {
      sequelize,
      tableName: 'venda',
      timestamps: false
    })
  }

  // relaacao one-to-many com item
  // pode ter multiplos itens
  static associate(models) {
    this.hasMany(models.Item, { foreignKey: 'idVenda', as: 'produtos' })
    this.hasOne(models.Cliente, { foreignKey: 'idCliente', as: 'cliente' })
  }
}

module.exports = Vendas;
