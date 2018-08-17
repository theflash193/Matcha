var express = require('express');
var router = express.Router();
const mongo = require('../database.js');
const email = require('../mail.js');
const assert = require('assert');
const passwordGenerator = require("password-generator");
/* GET users listing. */
router.get('/', function(req, res, next) {
  users = [{id: 1, username: "fast"}, {id: 2, username: "yolo"}];
  res.json(users);
});


/* Get user information */

router.get('/id/:*', function(req, res, next) {
  let id;

  id = parseInt(req.params[0]);
  mongo.MongoClient.connect(mongo.url, { useNewUrlParser: true }, function(err, client) {
    const db = client.db(mongo.dbName);

    db.collection("users").findOne({id: id})
    .then((result) => {console.log(result);res.json({result})})
    .catch((err) => {client.close();return (res.json({error: "la requete a echouer"}))});
  });
});

router.post('/id/:*', function(req, res, next) {
  let id;
  
  id = parseInt(req.params[0]);
  update_user = req.body;
  console.log(update_user);
  mongo.MongoClient.connect(mongo.url, { useNewUrlParser: true }, function(err, client) {
    const db = client.db(mongo.dbName);
    db.collection("users").findOneAndUpdate({id: id}, {$set: update_user})
    .then(result => {console.log(result);})
    .catch(result => {console.log(result);})
  });
});

router.get('/initPassword/', function(req, res, next) {
  let form;
  let valid;
  let password;
  
  valid = false;
  form = req.body;
  update_user = req.body;
  mongo.MongoClient.connect(mongo.url, { useNewUrlParser: true }, function(err, client) {
    const db = client.db(mongo.dbName);
    password = passwordGenerator();
    db.collection("user").find({email: form.email})
    .then(result => {console.log(result)})
    .catch()
  });
});

module.exports = router;
