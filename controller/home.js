const loginModel = require('../model/login');

const HomeController = {
  async render(req, res) {
    const userId = req.userId;
    try {
      const user = await loginModel.findOne({ where: { loginId: userId } })
      
      res.render('home', {
        user: {
          userId: userId,
          userEmail: user.emailCliente
        }
      })
    } catch (error) {
      res.render('erro', {
        erro: error
      })
    }
    
  }
}

module.exports = HomeController;
