const clienteModel = require('../model/cliente');

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
    
  }
}

module.exports = ClientesController;
