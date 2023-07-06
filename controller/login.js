const { BASE_URL } = require("../config/config");
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

      res.cookie('Authorization', user.loginId)
      res.redirect(BASE_URL + '/home')
    } catch (error) {
      res.set({
        'Content-Type': 'text/html',
      })

      res.render('erro', {
        erro: error,
        redirect: '/'
      })
    }
  },
  async render(req, res) {
    res.clearCookie('Authorization')
    res.set({
      'Content-Type': 'text/html',
    })
    res.render('login');
  }
}

module.exports = LoginController;
