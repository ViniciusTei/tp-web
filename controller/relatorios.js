const vendasModel = require('../model/vendas')

const RelatoriosController = {
  async render(req, res) {
    const user = req.user;
    try {
      const vendas = await vendasModel.findAll({
        include: [
          {
            association: 'produtos',
            include: {
              association: 'produto'
            }
          },
          {
            association: 'cliente'
          },
      ]
      })

      const result =  vendas.map(v => ({
          id: v.idVendas,
          dataVenda: v.dataVenda,
          nomeCliente: v.cliente?.nomeCliente ?? '',
          produtos: v.produtos.map(p => ({
            id: p.idProduto,
            descricao: p.produto.descricaoProduto,
            quantidade: p.quantidadeItem,
            valor: p.quantidadeItem * p.produto.precoVenda
          }))
        }))
      
      res.render('relatorios', {
        user,
        vendas: result
      }) 
    } catch (error) {
      res.render('erro', {
        erro: error,
        redirect: '/home'
      })
    }
  }
}

module.exports = RelatoriosController;
