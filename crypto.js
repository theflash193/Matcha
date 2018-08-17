var CryptoJS = require("crypto-js");

const crypt = (text) => {
    var ciphertext = CryptoJS.AES.encrypt(JSON.stringify(text), 'secret key 123');
    return (ciphertext.toString());
}

const decrypt = (text) => {
    var bytes  = CryptoJS.AES.decrypt(text, 'secret key 123');
    var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    return (decryptedData);
}

module.exports = {crypt, decrypt};