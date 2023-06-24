const express = require("express");
const LoginController = require("./controller/login");
const HomeController = require("./controller/home");

const auth = require('./middleware/auth');

const pages = express.Router();

pages.get('/', LoginController.render);

pages.get('/register', function(req, res) {
  res.render('register');
});

// prortected routes
pages.get('/home', auth, HomeController.render);
pages.get('/cidade', auth, function(req, res) {
  console.log('cidade', req.userId)
  res.render('cidade', { user: { userEmail: 'teste' }});
});

module.exports = pages;
