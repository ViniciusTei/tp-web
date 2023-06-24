const express = require("express");
const LoginController = require("./controller/login");
const RegisterController = require("./controller/register");
const CidadeController = require("./controller/cidade");

const auth = require("./middleware/auth");

const router = express.Router();

router.post('/login', LoginController.index)
router.post('/register', RegisterController.index)
router.post('/cidade', auth, CidadeController.index)

module.exports = router;
