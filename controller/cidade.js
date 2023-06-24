const loginModel = require('../model/login');

const CidadeController = {
  async render(req, res) {
    const user = req.user;
    try {
      res.render('cidade', {
        user
      })
    } catch (error) {
      res.render('erro', {
        erro: error
      })
    }
    
  }
}

module.exports = CidadeController;
