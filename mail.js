var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'student.grasskw@gmail.com',
    pass: 'devweb193'
  }
});

// var mailOptions = {
//   from: 'matcha@noreply.com',
//   to: 'myfriend@yahoo.com',
//   subject: 'Sending Email using Node.js\n',
//   text: 'That was easy!'
// };

// transporter.sendMail(mailOptions, function(error, info){
//     if (error) {
//         console.log(error);
//     } else {
//         console.log('Email sent: ' + info.response);
//     }
// });

let mailComfirmation = (username, email, url) => {
    let href = "http://localhost:3001/" + url;
    console.log(href);
    let text = "Bonjours " + username +",\npour comfirmer votre d'inscription.cliquer sur le lien suivant localhost:3000/"+ url;
    let mailOptions = {
      from: 'matcha@noreply.com',
      to: email,
      subject: 'Comfirmation de creation de compte\n',
      html: "<p>Bonjours "+ username +",\npour comfirmer votre d'inscription.cliquer sur le lien suivant : <a href=\"" + href + "\">clique ici</a></p>"
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
        console.log(error);
        } else {
        console.log('Email sent: ' + info.response);
        }
    });
}

let initialisationPassword = (username, email, password) => {
    let mailOptions = {
      from: 'matcha@noreply.com',
      to: email,
      subject: 'Mot de passe reinitialiser\n',
      html: "<p>Voici votre nouveau mot de passe " + password + "</p>"
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
        console.log(error);
        } else {
        console.log('Email sent: ' + info.response);
        }
    });
}

module.exports = {mailComfirmation, initialisationPassword};
