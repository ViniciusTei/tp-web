const produtoModel = require('../model/produto');
const { BASE_URL } = require("../config/config");

const ProdutosController = {
  async get(req, res) {
    try {
      const produtos = await produtoModel.findAll({
        include: {
          association: 'fabricante'
        }
      })
      res.send(produtos)
    } catch (error) {
      res.render('erro', {
        erro: error,
        redirect: '/home'
      })
    }
  },
  async render(req, res) {
    try {
      const user = req.user;

      const produtos = await produtoModel.findAll({
        include: {
          association: 'fabricante'
        }
      })

      const priceFormat = new Intl.NumberFormat('pt-Br', {
        style: 'currency',
        currency: 'BRL'
      })

      const formatedP = produtos.map(p => ({
        idProduto: p.idProduto,
        descricaoProduto: p.descricaoProduto,
        estoqueProduto: p.estoqueProduto,
        precoCusto: priceFormat.format(p.precoCusto),
        precoVenda: priceFormat.format(p.precoVenda),
        fabricante: p.fabricante
      }))

      res.render('produto', {
        user,
        produtos: formatedP
      })
    } catch (error) {
      res.render('erro', {
        erro: error,
        redirect: '/home'
      })
    }
  },
  async create(req, res) {
    try {
      const payload = req.body;
      const produtoParaCriar = {
        idProduto: null,
        descricaoProduto: payload.descricaoProduto,
        estoqueProduto: payload.estoqueProduto,
        precoCusto: payload.precoCusto,
        precoVenda: payload.precoVenda,
        idFabricante: Number(payload.fabricanteProduto)
      }

      if(
        !payload.descricaoProduto ||
        !payload.estoqueProduto ||
        !payload.precoCusto ||
        !payload.precoVenda ||
        !payload.fabricanteProduto
      ) {
        throw new Error('Faltam dados para cadastrar o produto')
      }

      await produtoModel.create(produtoParaCriar)

      res.redirect(BASE_URL + '/produto') 
    } catch (error) {
      res.render('erro', {
        erro: error,
        redirect: '/produto'
      })
    }
  }
}

module.exports = ProdutosController;

