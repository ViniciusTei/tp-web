const { BASE_URL } = require("../config/config");
const loginModel = require('../model/login');

const RegisterController = {
  async index(req, res) {
    const data = req.body;
    try {
      const user = await loginModel.create({
        emailCliente: data.useremail,
        senhaCliente: data.password,
        nivelAcesso: '1'
      })
      
      console.log('inserted new user', user)
      res.cookie('Authorization', user.loginId)
      res.redirect(BASE_URL + '/home')
    } catch (error) {
      res.render('erro', {
        erro: error
      })
    }
    
  },
  async render(req, res) {
    res.set({
      'Content-Type': 'text/html',
    })
    res.render('register');
  }
}

module.exports = RegisterController;
