const fabricanteModel = require('../model/fabricante');

const FabricanteController = {
  async get(req, res) {
    const user = req.user;
    try {
      const fabricantes = await fabricanteModel.findAll()
      res.send(fabricantes)
    } catch (error) {
      res.render('erro', {
        erro: error,
        redirect: '/home'
      })
    }
    
  }
}

module.exports = FabricanteController;
