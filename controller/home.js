const loginModel = require('../model/login');

const HomeController = {
  async render(req, res) {
    const user = req.user;
    try {
      res.render('home', {
        user
      })
    } catch (error) {
      res.render('erro', {
        erro: error
      })
    }
    
  }
}

module.exports = HomeController;
