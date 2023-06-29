const fabricanteModel = require('../model/fabricante');
const { BASE_URL } = require("../config/config");

const FabricanteController = {
  async render(req, res) {
    const user = req.user;
    try {
      const fabricantes = await fabricanteModel.findAll()
      res.render('fabricante', {
        user,
        fabricantes
      })
    } catch (error) {
      res.render('erro', {
        erro: error,
        redirect: '/home'
      })
    }
  },
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
    
  },
  async create(req, res) {
    const payload = req.body;
    try {
      
      if (!payload.nomeFabricante || !payload.siteFabricante) {
        throw new Error('Faltam dados para o cadastro do fabricante')
      }

      const novoFabricante = await fabricanteModel.create({
        fabricanteId: null,
        nomeFabricante: payload.nomeFabricante,
        siteFabricante: payload.siteFabricante,
      })
       
      console.log('inserted new fab', novoFabricante)
      res.redirect(BASE_URL + '/fabricante')
    } catch (error) {
      res.render('erro', {
        erro: error,
        redirect: '/home'
      })
    }
  },
}

module.exports = FabricanteController;
