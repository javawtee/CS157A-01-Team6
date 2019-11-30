const nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
    service: 'gmail',
    debug: true,
    auth: {
        user: 'cs157ateam6@gmail.com', // generated ethereal user
        pass: 'Team6_123456'// generated ethereal password
    }
})

// send mail with defined transport object
var mailOptions = function ({ recipients, subject, content, html }) {
    return {
        from: 'cs157ateam6@gmail.com', // sender address
        to: recipients, // list of receivers
        subject: subject, // Subject line
        text: content,
        html
    }
}

transporter.sendMail(mailOptions, function (err, info) {
    console.log(mailOptions)
    if (err) {
        // Best practice: write log
        console.log(err);
    } else {
        // Best practice: write log
        console.log('Email sent: ' + info.response)
    }
})



module.exports = function (systemoptions, next) {
    transporter.sendMail(mailOptions(systemoptions), function (err, info) {
        if (err) {
            // Best practice: write log
            console.log(err);
        } else {
            // Best practice: write log
            if (next) {
                next()
            } else
                console.log("Email sent")
        }
    })
}