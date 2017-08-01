var express = require('express');
var router = express.Router();
// var mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/matcha');
/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('signin');
});

router.get('/signup', function(req, res, next) {
  res.render('signup');
});

router.post('/', function(req, res, next) {
  console.log("post signin");
  res.redirect('/');
  console.log("post signin");
});

module.exports = router;