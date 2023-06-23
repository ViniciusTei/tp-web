const express = require("express");

const pages = express.Router();

pages.get('/', function(req, res) {
  res.render('login');
});

pages.get('/register', function(req, res) {
  res.render('register');
});

pages.get('/home', function(req, res) {
  res.render('home', { user: { userEmail: 'teste' }});
});

module.exports = pages;
