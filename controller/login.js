const loginModel = require('../model/login');

const LoginController = {
  async index(req, res) {
    const payload = req.body;

    try {
      const user = await loginModel.findOne({ where: { emailCliente: payload.useremail } })

      if (user === null) {
        throw new Error('User not found!')
      }

      res.render('home', {
        user: user instanceof loginModel
      })
    } catch (error) {
      res.render('erro', {
        erro: error
      })
    }
  },
}

module.exports = LoginController;
