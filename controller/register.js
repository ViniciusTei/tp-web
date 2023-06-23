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
      
      console.log('inserted user', user)
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

module.exports = RegisterController;
