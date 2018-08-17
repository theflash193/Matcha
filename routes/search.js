var express = require('express');
var router = express.Router();
const mongo = require('../database.js');
var CryptoJS = require("crypto-js");
var mail = require("../mail.js");

/* GET home page. */

/* When user seen profil from other user */
router.get('/:id/', function(req, res, next) {
    const id = req.params[0];

    mongo.search({}, "users", "one")
    .then((result) => res.json(result))
    .catch((err) => res.json(err))
    .then((user) => {
        console.log(user);
    })
    console.log(id);
});

router.post('/filter:id=:geolocation?:tags?:popularite?', function(req, res, next) {
    const id = req.params.geolocation;
    const id = req.params.tags;
    const id = req.params.popularite;

    console.log(id);
});


/* When user like someone */


// const crypt = (text) => {var ciphertext = CryptoJS.AES.encrypt(JSON.stringify(text), 'secret key 123');return (cyphertext.toString());}


module.exports = router;

// /consultation d'une personne/

module.exports = router;
