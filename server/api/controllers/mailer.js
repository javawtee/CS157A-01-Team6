const nodemailer = require("nodemailer");


    var transporter = nodemailer.createTransport({
    service: 'gmail',
    debug:true,
    auth: {
        user: 'cs157ateam6@gmail.com', // generated ethereal user
        pass:  'Team6_123456'// generated ethereal password
    }
});

    // send mail with defined transport object
    var mailOptions = function (toEmail, resetLink)  { 
        return {
        from: 'cs157ateam6@gmail.com', // sender address
        to: toEmail, // list of receivers
        subject: 'Reset Password', // Subject line
        text: `Please click the following link to reset password\n ${resetLink}` 
        }
    };

    transporter.sendMail(mailOptions, function(err, info){
        if (err) {
            console.log(err);
        }else{
            console.log('Email sent: ' + info.responce)
        }
    });