// const loginModel = require('../model/login');

const VendasController = {
  async render(req, res) {
    const user = req.user;
    try {
      res.render('venda', {
        user,
        vendas: []
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
