const cidadeModel = require('../model/cidade');
const { BASE_URL } = require("../config/config");

const CidadeController = {
  async render(req, res) {
    const user = req.user;
    try {
      const all = await cidadeModel.findAll();

      res.render('cidade', {
        user,
        cidades: all
      })
    } catch (error) {
      res.render('erro', {
        erro: error,
        redirect: '/home',
      })
    }
    
  },
  async index(req, res) {
    const payload = req.body
    try {
      if (!payload.nomeCidade || !payload.estadoCidade) {
        throw new Error('Dados faltando para realizar o cadastro')
      }

      const data = {
        cidadeId: null,
        codigoCidade: payload.nomeCidade.toLowerCase().replace(/\s+/g,'-'),
        nomeCidade: payload.nomeCidade,
        estadoCidade: payload.estadoCidade
      }

      const novaCidade = await cidadeModel.create(data);

      console.log('inserted new city', novaCidade)
      res.redirect(BASE_URL + '/cidade')
    } catch (error) {
      res.render('erro', {
        erro: error,
        redirect: '/cidade',
      })
    }
  }
}

module.exports = CidadeController;
