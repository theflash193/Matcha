var nodemailer = require('nodemailer');
 
// create reusable transporter object using SMTP transport 
var transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: false,
    auth: {
        user: 'flash.gordon77176@gmail.com',
        pass: 'benson193'
    },
    tls: {
        rejectUnauthorized: false
    }
});

module.exports = function (dst) {
	return {
    
		SuccessMsg : function() {
			var mailOptions = {
			    from: 'gordon Admin grass.kw77@gmail.com', // sender address 
			    to: dst, // list of receivers 
			    subject: 'Creation de compte', // Subject line 
			    text: 'Felicitation vous avez cree un compte sur mon site', // plaintext body 
			    html: '<h1>Felicitation vous avez cree un compte sur mon site</h1>' // html body 
			};
      console.log(dst);
			transporter.sendMail(mailOptions, function(error, info) {
			if(error){
			    console.log(error);
			}
			else{
			    console.log('Message sent: ' + info.response);
			}
			});
		}
	}
}