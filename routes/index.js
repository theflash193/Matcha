var express = require('express');
var router = express.Router();
const mongo = require('../database.js');
const crypto = require("../crypto.js");
var CryptoJS = require("crypto-js");
var mail = require("../mail.js");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });

});
// const crypt = (text) => {var ciphertext = CryptoJS.AES.encrypt(JSON.stringify(text), 'secret key 123');return (cyphertext.toString());}

router.post('/connexion', function(req, res, next) {
  const form = req.body;
  
  mongo.MongoClient.connect(mongo.url, { useNewUrlParser: true }, function(err, client) {
    const db = client.db(mongo.dbName);
    db.collection("users").findOne({username: form.email, password: form.password, active: true})
    .then(result => {console.log(result);if (result) res.json({login: true, message: "connexion succeed"}); else res.json({login: false, message: "a error occur on server"});})
    .catch(err => {res.json({login: false, message: "a error occur on server"})})
  });
});

router.post('/inscription', function(req, res, next) {
  const form = req.body;
  let url;

  mongo.MongoClient.connect(mongo.url, { useNewUrlParser: true }, function(err, client) {
    const db = client.db(mongo.dbName);
    let   count_users;
    let   update_count;

    db.collection("user_account").find({}).toArray()
    .then(result => {
      if (result.length == 0) {
          db.collection("user_account").insertOne({users_count: 1})
          .then(fulfilled => {console.log(fulfilled)})
          .catch(err => console.log(err));
          count_users = 1;
      } else {
        count_users = result[0].users_count + 1;
        update_count = count_users;
        db.collection("user_account").updateOne({users_count: count_users - 1}, {$set: {"users_count": update_count}})
        .then(fulfilled => {console.log("succed "+fulfilled)})
        .catch(err => console.log(err))
      }
    })
    .catch(err => {console.log(err)})
    db.collection("users").find({email: form.email}).toArray()
    .then(result => {
      if (res.length == 0) {
        form["id"] = count_users;
        form["active"] = false;
        form["hash"] = crypto.crypt(form.username);
        form["password"] = crypto.crypt(form.password);
        db.collection("users").insertOne(form)
        .then(() => {
          if (err) {console.log(err);throw err;}
          url = "email-verification/:" + form.hash;
          mail.mailComfirmation(form.username, form.email, url)
          client.close();
        })
        .catch()
      }
    })
    .catch(err => {client.close()})
  });
});

router.get('/email-verification/:*', function(req, res, next) {
  console.log(req.params);
  
  mongo.MongoClient.connect(mongo.url, { useNewUrlParser: true }, function(err, client) {
    const db = client.db(mongo.dbName);

    db.collection("users").find().toArray()
    .then(() => {
      if (resultat.length == 0) {
        console.log("existe pas");
        res.redirect('http://localhost:3000/');
        res.json({message: "lien non valide"});
      } else {
        resultat[0].active = true;
        db.collection("users").update({hash: req.params[0]}, resultat[0])
        .then(() => { res.redirect('http://localhost:3000/'); })
        .catch(() => {})
      }
    })
    db.collection("users").find({hash: req.params[0]}).toArray(function(err, resultat) {
      if (err) throw err;
      console.log(resultat);
      client.close();
      })
  });
});

module.exports = router;
