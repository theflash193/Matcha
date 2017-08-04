var express = require('express');
var router = express.Router();
var test = require('../test.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express toto' });
  res.render('index');
  // test.a;
  console.log(test.area);
  test = 6;
   console.log(test);
});

module.exports = router;
