const express = require("express");
const LoginController = require("./controller/login");
const RegisterController = require("./controller/register");
const CidadeController = require("./controller/cidade");
const ClientesController = require("./controller/clientes");

const auth = require("./middleware/auth");

const router = express.Router();

router.post('/login', LoginController.index)
router.post('/register', RegisterController.index)
router.post('/cidade', auth, CidadeController.index)
router.get('/cidades', auth, CidadeController.get)
router.post('/clientes', auth, ClientesController.index)


module.exports = router;
