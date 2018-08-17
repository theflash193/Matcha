var express = require('express');
var router = express.Router();
const mongo = require('../database.js');
var CryptoJS = require("crypto-js");
var mail = require("../mail.js");

/* GET home page. */

/* When user seen profil from other user */
router.get('/show/id:*', function(req, res, next) {
    const id = req.params[0];
    const from = req.body.from;
    
    database.newNotification(to, from, type)
    .catch(err => {req.json({message: err})})
});


/* When user like someone */
router.get('/like/id/:*', function(req, res, next) {
    const to = req.params[0];
    const from = req.body.from;
    
    database.newNotification(to, from, type)
    .catch(err => {req.json({message: err})})
});

// const crypt = (text) => {var ciphertext = CryptoJS.AES.encrypt(JSON.stringify(text), 'secret key 123');return (cyphertext.toString());}

// /consultation d'une personne/

module.exports = router;
