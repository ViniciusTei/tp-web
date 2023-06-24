const express = require("express");
const LoginController = require("./controller/login");
const HomeController = require("./controller/home");
const RegisterController = require("./controller/register");
const CidadeController = require("./controller/cidade");

const auth = require('./middleware/auth');

const pages = express.Router();

pages.get('/', LoginController.render);
pages.get('/register', RegisterController.render);

// prortected routes
pages.get('/home', auth, HomeController.render);
pages.get('/cidade', auth, CidadeController.render);

module.exports = pages;
