const clienteModel = require('../model/cliente');
const { BASE_URL } = require("../config/config");

const ClientesController = {
  async render(req, res) {
    const user = req.user;
    try {
      const allClientes = await clienteModel.findAll({
        include: {
          association: 'localizacao'
        }
      })

      const clientes = allClientes.map(c => {
        return {
          idCliente: c.idCliente,
          nomeCliente: c.nomeCliente,
          enderecoCliente: c.enderecoCliente,
          telefoneCliente: c.telefoneCliente,
          cidadeCliente: `${c.localizacao.nomeCidade}/${c.localizacao.estadoCidade}`
        }
      })

      res.render('clientes', {
        user,
        clientes
      })
    } catch (error) {
      res.render('erro', {
        erro: error,
        redirect: '/home',
      })
    }
    
  },
  async index(req, res) {
    const { nomeCliente, enderecoCliente, telefoneCliente, cidadeCliente } = req.body
    try {
      if (!nomeCliente || !enderecoCliente  || !telefoneCliente || !cidadeCliente) {
        console.log({ nomeCliente, enderecoCliente, telefoneCliente, cidadeCliente }, req.body)
        throw new Error('Dados faltando para criar o cliente')
      }

      const novoCliente = await clienteModel.create({
        idCliente: null,
        nomeCliente,
        enderecoCliente,
        telefoneCliente,
        idCidade: cidadeCliente
      })

      console.log('inserted new client', novoCliente)
      res.redirect(BASE_URL + '/clientes')
    } catch (error) {
      res.render('erro', {
        erro: error,
        redirect: '/clientes',
      })
    }
  }
}

module.exports = ClientesController;
