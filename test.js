var CryptoJS = require("crypto-js");
 
var data = "yolo"
 
// Encrypt
var ciphertext = CryptoJS.AES.encrypt(JSON.stringify(data), 'secret key 123');
console.log(ciphertext.toString());

// Decrypt
var bytes  = CryptoJS.AES.decrypt(ciphertext.toString(), 'secret key 123');
var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
 
console.log(decryptedData);