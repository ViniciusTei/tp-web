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

  static associate(models) {
    this.belongsTo(models.Cliente, { foreignKey: 'idCliente', as: 'cliente' })
    this.hasMany(models.Item, { foreignKey: 'idVenda', as: 'venda' })
  }
}

module.exports = Vendas;
