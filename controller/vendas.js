const { BASE_URL } = require("../config/config");
const { formatMoney, formatDate } = require('../utils/format');
const vendasModel = require('../model/vendas');
const itemsModel = require('../model/item');
const clienteModel = require('../model/cliente');

const VendasController = {
  async render(req, res) {
    const user = req.user;
    try {
      const vendas = await vendasModel.findAll({
        include: [
          {
            association: 'cliente',
          },
        ]
      })
      
      const vendasList = vendas.map(v => ({
        idVendas: v.idVendas,
        nomeCliente: v.cliente?.nomeCliente,
        dataVenda: formatDate(v.dataVenda),
        valorPago: formatMoney(v.valorPago)
      }))

      res.render('venda', {
        user,
        vendas: vendasList
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
  },
  async create(req,res) {
    const user = req.user
    const payload = req.body
    try {
      const venda = await vendasModel.create({
        idVendas: null,
        idCliente: user.userId,
        dataVenda: payload.dataVenda,
        valorTotal: payload.valorTotal,
        valorPago: payload.valorPago,
        desconto: payload.desconto
      })

      for (const item of payload.items) {
        await itemsModel.create({
          idItem: null,
          idVenda: venda.idVendas,
          idProduto: item.idProduto,
          quantidadeItem: item.quantidade
        })
      }

      res.redirect(BASE_URL + '/vendas')
    } catch (error) {
      res.render('erro', {
        erro: error,
        redirect: '/vendas/cadastro'
      })
    }
  }
}

module.exports = VendasController;
