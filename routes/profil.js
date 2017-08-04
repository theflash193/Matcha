var express = require('express');
var router = express.Router();
// var mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost/matcha');
/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('profil');
});

module.exports = router;