var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://localhost:27017/matcha';
var database = require('../database');
var assert = require('assert');


// mongoose.connect('mongodb://localhost/matcha');
/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('signin/signin');
});

router.get('/signup', function(req, res, next) {
  res.render('signin/signup');
});

router.post('/', function(req, res, next) {
  database.MongoClient.connect(database.url, function(err, db) {
    var collection = db.collection('users');
    collection.findOne({login: req.body.login}, function(err, result) {
      if (err) throw err
      if (result) res.redirect('/');
      else console.log("fail to connect");
    })
    // database.findDocuments(db, {login: req.body.login}, function(err, result) {
    //   console.log(res);
    //   if (err) console.log('login or password is invalid');
    //   else res.redirect('/');
    // })    
  })
  // console.log(req);
});

router.post('/signup', function(req, res, next) {
  database.MongoClient.connect(database.url, function(err, db) {
    database.insertDocuments(db, [
      {
        login : req.body.password,
        password : req.body.password,
        prenom : req.body.prenom,
        nom : req.body.nom,
        mail : req.body.mail
      }],
      function() {
        db.close();
    })
    console.log('log');
  })
  res.redirect('/signin');
  console.log(req);
});

module.exports = router;