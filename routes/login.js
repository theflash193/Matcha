var express = require('express');
var router = express.Router();
// var mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/matcha');
/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('signin/signin');
});

router.get('/signup', function(req, res, next) {
  res.render('signin/signup');
});

router.post('/', function(req, res, next) {
  res.redirect('/');
});

module.exports = router;