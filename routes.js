const express = require("express");
const LoginController = require("./controller/login");
const RegisterController = require("./controller/register");

const router = express.Router();

router.post('/login', LoginController.index)
router.post('/register', RegisterController.index)

module.exports = router;
