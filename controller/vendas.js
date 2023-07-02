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
  },
  async renderCadastro(req, res) {
    const user = req.user;
    try {
      
      res.render('venda/cadastro', {
        user
      })
    } catch (error) {
      res.render('erro', {
        erro: error,
        redirect: '/vendas'
      })
    }
  }
}

module.exports = VendasController;
