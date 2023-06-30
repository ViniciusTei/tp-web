const express = require("express");
const LoginController = require("./controller/login");
const RegisterController = require("./controller/register");
const CidadeController = require("./controller/cidade");
const ClientesController = require("./controller/clientes");
const FabricantesController = require("./controller/fabricante");
const ProdutosController = require("./controller/produtos");

const auth = require("./middleware/auth");

const router = express.Router();

router.post('/login', LoginController.index)
router.post('/register', RegisterController.index)
router.post('/cidade', auth, CidadeController.index)
router.get('/cidades', auth, CidadeController.get)
router.post('/clientes', auth, ClientesController.index)
router.get('/fabricante', auth, FabricantesController.get)
router.post('/fabricante', auth, FabricantesController.create)
router.get('/produto', auth, ProdutosController.get)
router.post('/produto', auth, ProdutosController.create)


module.exports = router;
