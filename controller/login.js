const loginModel = require('../model/login');

const LoginController = {
  async index(req, res) {
    const payload = req.body;

    try {
      const user = await loginModel.findOne({ where: { emailCliente: payload.useremail } })

      if (user === null) {
        throw new Error('User not found!')
      }

      if (user.senhaCliente !== payload.password) {
        throw new Error('User incorret!')
      }

      res.render('home', {
        user: {
          userId: user.loginId,
          userEmail: user.emailCliente
        }
      })
    } catch (error) {
      res.render('erro', {
        erro: error
      })
    }
  },
}

module.exports = LoginController;
