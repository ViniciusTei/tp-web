const express = require("express");
const LoginController = require("./controller/login");

const auth = require('./middleware/auth');

const pages = express.Router();

pages.get('/', LoginController.render);

pages.get('/register', function(req, res) {
  res.render('register');
});

// prortected routes
pages.get('/home', auth, function(req, res) {
  console.log('home', req.userId)
  res.render('home', { user: { userEmail: 'teste' }});
});
pages.get('/cidade', auth, function(req, res) {
  console.log('cidade', req.userId)
  res.render('cidade', { user: { userEmail: 'teste' }});
});

module.exports = pages;
