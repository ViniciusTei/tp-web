const produtoModel = require('../model/produto');

const ProdutosController = {
  async get(req, res) {
    try {
      const produtos = await produtoModel.findAll({
        include: {
          association: 'fabricante'
        }
      })
      res.send(produtos)
    } catch (error) {
      res.render('erro', {
        erro: error,
        redirect: '/home'
      })
    }
  }
}

module.exports = ProdutosController;

