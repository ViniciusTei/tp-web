const LoginModel = require('../model/login');
const loginModel = require('../model/login');

const LoginController = {
  session(req, res) {
    loginModel.login('vinicius@email.com', '123')
    res.send('Login')
  },
  register(req, res) {
    const data = req.body;
    try {
      const result = LoginModel.register(data.useremail, data.password);
      console.log('inserted row', result)
      res.render('home')
    } catch (error) {
      res.render('erro', {
        erro: error
      })
    }
    
  }
}

module.exports = LoginController;
