const { formatMoney, formatDate } = require('../utils/format');
const vendasModel = require('../model/vendas');

const VendasController = {
  async render(req, res) {
    const user = req.user;
    try {
      const vendas = await vendasModel.findAll({
        where: { idCliente: user.userId },
        include: [
          {
            association: 'cliente',
          },
        ]
      })
      res.render('venda', {
        user,
        vendas: vendas.map(v => ({
          idVendas: v.idVendas,
          nomeCliente: v.cliente.nomeCliente,
          dataVenda: formatDate(v.dataVenda),
          valorPago: formatMoney(v.valorPago)
        }))
      })
    } catch (error) {
      res.render('erro', {
        erro: error,
        redirect: '/home'
      })
    }
  }
}

module.exports = VendasController;
