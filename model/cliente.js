const { Model, DataTypes } = require('sequelize');

class Cliente extends Model {
  static init(sequelize) {
    super.init({
      idCliente: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      nomeCliente: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      enderecoCliente: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      telefoneCliente: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      idCidade: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    }, {
      sequelize,
      tableName: 'cliente',
      timestamps: false
    })
  }

  static associate(models) {
    this.belongsTo(models.Cidade, { foreignKey: 'idCidade', as: 'localizacao' })
    this.belongsTo(models.Vendas, { foreignKey: 'idCliente', as: 'cliente' })
  }
}

module.exports = Cliente;
