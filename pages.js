const express = require("express");
const LoginController = require("./controller/login");
const HomeController = require("./controller/home");
const RegisterController = require("./controller/register");
const CidadeController = require("./controller/cidade");
const ClientesController = require("./controller/clientes");
const FabricanteController = require("./controller/fabricante");
const ProdutoController = require("./controller/produtos");
const VendasController = require("./controller/vendas");
const RelatoriosController = require("./controller/relatorios");

const auth = require('./middleware/auth');

const pages = express.Router();

pages.get('/', LoginController.render);
pages.get('/register', RegisterController.render);

// prortected routes
pages.get('/home', auth, HomeController.render);
pages.get('/cidade', auth, CidadeController.render);
pages.get('/clientes', auth, ClientesController.render);
pages.get('/fabricante', auth, FabricanteController.render);
pages.get('/produto', auth, ProdutoController.render);
pages.get('/vendas', auth, VendasController.render);
pages.get('/vendas/cadastro', auth, VendasController.renderCadastro);
pages.get('/relatorios', auth, RelatoriosController.render);
module.exports = pages;
