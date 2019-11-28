const conn = require('../connector')
const uuidv5 = require('uuid/v5')
const nodemailer = require('nodemailer')

exports.getList = function (req, res, next) {
    conn.query('SELECT * FROM test_login;', (err, rows) => {
        if (err) res.status(500).send('Oops! Something went wrong with connection')
        else {
            res.status(200).send(`
                <div>
                    <table>
                        <tr><td>id</td><td>user_id</td><td>password (sha2)</td></tr>
                        ${rows.map(row => { return `<tr><td>${row.id}</td><td>${row.user_id}</td><td>${row.password}</td></tr>` })}
                    </table>
                </div>
            `)
        }
    })
}

exports.signedIn = function (req, res, next) {
    if (req.session.user) {
        res.jsonp({ info: req.session.user, preference: req.session.user.preference })
    }
    res.jsonp(undefined)
}

exports.signUp = function (req, res, next) {
    var { firstName, lastName, middleInitial, signupEmail, signupPassword } = req.body
    // var activate_link = uuidv5(signupEmail, '1b671a64-40d5-491e-99b0-da01ff1f3341')
    if (firstName && lastName && middleInitial && signupEmail && signupPassword) {
        conn.query(`insert into user (user_id, email, password, first_name, last_name, middle_initial) 
                values (sha1(?), ?, sha2(?, 0), ?, ?, ?);`, [signupEmail, signupEmail, signupPassword, firstName, lastName, middleInitial],
            (err, result) => {
                if (err) {
                    if (err.code === 'ER_DUP_ENTRY') {
                        res.jsonp('duplicate')
                    } else {
                        res.status(500).jsonp('Failed in initial querry' + err)
                    }
                } else if (result && result.affectedRows > 0) {

                    //nodemailer implementation
                    var transporter = nodemailer.createTransport({
                        service: 'gmail',
                        auth: {
                               user: 'AST6Airlines@gmail.com',
                               pass: 'Team6Password!'
                           }
                       });

                    const mailOptions = {
                        from: 'AST6Airlines@gmail.com', // sender address
                        to: signupEmail, // list of receivers
                        subject: 'Registration for AST6 Airline Services', // Subject line
                        html: `<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
                        <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
                          <head>
                            <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
                            <!-- [ if !mso]> <!-->
                            <meta content="IE=edge" http-equiv="X-UA-Compatible" />
                            <!-- <![endif] -->
                            <meta content="telephone=no" name="format-detection" />
                            <meta content="width=device-width, initial-scale=1.0" name="viewport" />
                            <link rel="apple-touch-icon" sizes="76x76" href="http://paulgoddarddesign.com/images/apple-icon.jpg">
                            <link rel="icon" type="image/png" sizes="96x96" href="http://paulgoddarddesign.com/images/favicon.jpg">
                            <title>Material Email Template</title>
                            <link href="https://fonts.googleapis.com/css?family=Roboto+Mono" rel="stylesheet">
                            <script src='http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
                            <script src="http://paulgoddarddesign.com/js/ripple.js"></script>
                            <style type="text/css">
                        
                        
                            </style>
                            <!--[if gte mso 9]>
                            <xml>
                              <o:OfficeDocumentSettings>
                                <o:AllowPNG/>
                                <o:PixelsPerInch>96</o:PixelsPerInch>
                              </o:OfficeDocumentSettings>
                            </xml>
                            <![endif]-->
                          </head>
                          <body style="margin:0; padding:0; background-color: #eeeeee;" bgcolor="#eeeeee">
                            <!--[if mso]>
                            <style type="text/css">
                            body, table, td {font-family: Arial, Helvetica, sans-serif !important;}
                            </style>
                            <![endif]-->
                            <!-- START EMAIL -->
                            <table width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#eeeeee">
                              <div class="Gmail" style="height: 1px !important; margin-top: -1px !important; max-width: 600px !important; min-width: 600px !important; width: 600px !important;"></div>
                              <div style="display: none; max-height: 0px; overflow: hidden;">
                                Excited to serve you!
                              </div>
                              <!-- Insert &zwnj;&nbsp; hack after hidden preview text -->
                              <div style="display: none; max-height: 0px; overflow: hidden;">
                                &nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              </div>
                              <!-- START CARD 1 -->
                              <tr>
                                <td width="100%" valign="top" align="center" class="padding-container" style="padding-top: 0px!important; padding-bottom: 18px!important; mso-padding-alt: 0px 0px 18px 0px;">
                                  <table width="600" cellpadding="0" cellspacing="0" border="0" align="center" class="wrapper">
                                    <tr>
                                      <td>
                                        <table cellpadding="0" cellspacing="0" border="0">
                                          <tr>
                                            <td style="border-radius: 3px; border-bottom: 2px solid #d4d4d4;" class="card-1" width="100%" valign="top" align="center">
                                              <table style="border-radius: 3px;" width="600" cellpadding="0" cellspacing="0" border="0" align="center" class="wrapper" bgcolor="#ffffff">
                                                <tr>
                                                  <td align="center">
                                                    <table width="600" cellpadding="0" cellspacing="0" border="0" class="container">
                                                      <!-- START HEADER IMAGE -->
                                                      <tr>
                                                        <td align="center" class="hund ripplelink" width="600">
                                                          <img align="center" width="600" style="border-radius: 3px 3px 0px 0px; width: 100%; max-width: 600px!important" class="hund" src="http://paulgoddarddesign.com/emails/images/material-design/material.gif">
                                                        </td>
                                                      </tr>
                                                      <!-- END HEADER IMAGE -->
                                                      <!-- START BODY COPY -->
                                                      <tr>
                                                        <td class="td-padding" align="left" style="font-family: 'Roboto Mono', monospace; color: #212121!important; font-size: 24px; line-height: 30px; padding-top: 18px; padding-left: 18px!important; padding-right: 18px!important; padding-bottom: 0px!important; mso-line-height-rule: exactly; mso-padding-alt: 18px 18px 0px 13px;">
                                                          Thank you for joining AST6Airlines!
                                                        </td>
                                                      </tr>
                                                      <tr>
                                                        <td class="td-padding" align="left" style="font-family: 'Roboto Mono', monospace; color: #212121!important; font-size: 16px; line-height: 24px; padding-top: 18px; padding-left: 18px!important; padding-right: 18px!important; padding-bottom: 0px!important; mso-line-height-rule: exactly; mso-padding-alt: 18px 18px 0px 18px;">
                                                          We are sending you this message because this email address was used to create an account with our airline service. Thank you for registering with us, we hope that you are satisfied with out product!
                                                          <br><br>
                                                          Have a good day!
                                                        </td>
                                                      </tr>
                                                      <!-- END BODY COPY -->
                                                      <!-- BUTTON -->
                                                      <tr>
                                                        <td align="left" style="padding: 18px 18px 18px 18px; mso-alt-padding: 18px 18px 18px 18px!important;">
                                                          <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                            <tr>
                                                              <td>
                                                                <table border="0" cellspacing="0" cellpadding="0">
                                                                  <tr>
                                                                    <td align="left" style="border-radius: 3px;" bgcolor="#17bef7">
                                                                      <a class="button raised" href="http://localhost:3000" target="_blank" style="font-size: 14px; line-height: 14px; font-weight: 500; font-family: Helvetica, Arial, sans-serif; color: #ffffff; text-decoration: none; border-radius: 3px; padding: 10px 25px; border: 1px solid #17bef7; display: inline-block;">BUTTON</a>
                                                                    </td>
                                                                  </tr>
                                                                </table>
                                                              </td>
                                                            </tr>
                                                          </table>
                                                        </td>
                                                      </tr>
                                                      <!-- END BUTTON -->
                                                    </table>
                                                  </td>
                                                </tr>
                                              </table>
                                            </td>
                                          </tr>
                                        </table>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                              <!-- END CARD 1 -->
                        
                            </table>
                            <!-- END EMAIL -->
                          </body>
                        </html>
                        `
                      };

                    transporter.sendMail(mailOptions, function (err, info) {
                        if(err)
                          console.log("error in sendMail function" + err)
                        else
                          console.log(info);
                     });


                    // create preference relation for user
                    conn.query(`insert into preference values()`, (err, result) => {
                        // create user_has_preference relationship
                        if (err) res.status(500).jsonp(err)
                        else if (result && result.affectedRows > 0) {
                            var preferenceId = result.insertId
                            conn.query(`insert into user_has_preference values (sha1(?), ?);`, [signupEmail, preferenceId],
                                (err, result) => {
                                    if (err) res.status(500).jsonp(err)
                                    else if (result && result.affectedRows > 0) {
                                        return res.jsonp('success')
                                    }
                                })
                        }
                    })
                } else {
                    res.status(500).jsonp('Bad server response')
                }
            })
    } else {
        res.status(403).jsonp("Bad request")
    }
}

exports.signIn = function (req, res, next) {
    if (req.body.email && req.body.password) {
        conn.query(`select count(user_id) as C, user_id as ID, first_name as firstName, 
                    last_name as lastName, middle_initial as middleInitial, email, joined_datetime as joinedDate from user 
                    where email=? and password=sha2(?,0);`, [req.body.email, req.body.password],
            (err, result) => {
                if (err) res.status(500).jsonp(err)
                else if (!result || result[0].C === 0) {
                    res.jsonp(undefined)
                } else {
                    delete result[0].C
                    let user = result[0]
                    // get preference
                    conn.query(`select p.preference_id as preferenceId, p.depart_time as departTimeId, p.arrive_time as arriveTimeId,
                                    p.flight_class as flightClassId, p.max_price as maxPrice, p.sort_by as sortById
                                    from preference p, user_has_preference uhp where uhp.preference_id = p.preference_id and 
                                    uhp.user_id=?;`, [user.ID],
                        (err, result) => {
                            if (err) res.status(500).jsonp(err)
                            else if (result && result[0]) {
                                // write sign in session
                                req.session.user = user
                                req.session.user.preference = result[0]

                                delete result[0].preference_id
                                res.jsonp({ info: user, preference: result[0] })
                            } else {
                                res.status(500).jsonp('Bad server response')
                            }
                        })
                }
            })
    } else {
        res.status(403).jsonp("Bad request")
    }
}

exports.signOut = function (req, res, next) {
    req.session.destroy(err => {
        if (err) res.status(500).json(err)
        res.clearCookie(process.env.SESS_NAME)
        res.jsonp(undefined)
    })
}

exports.sendRecoveryLink = function (req, res, next) {
    if (req.query.email) {
        var now = new Date().getTime()
        var recovery_link = "/rl=" + uuidv5(`${req.query.email}${now}`, '1b671a64-40d5-491e-99b0-da01ff1f3341') // it is unique link
        var recovery_exp = now + (1000 * 60 * 15) // 15 minutes
        conn.query('update user set recovery_link=?, recovery_exp=? where email=?;', [recovery_link, recovery_exp, req.query.email],
            (err, result) => {
                if (err) res.status(500).json(err)
                else if (result && result.affectedRows > 0) {
                    res.jsonp('success')
                } else {
                    res.status(500).jsonp('Bad server response')
                }
            })
    } else {
        res.status(403).jsonp("Bad request")
    }
}

exports.confirmRecoveryLink = function (req, res, next) {
    if (req.query.link) {
        var fulllink = "/rl=" + req.query.link
        conn.query('select recovery_exp from user where recovery_link=?;', [fulllink],
            (err, result) => {
                if (err) res.status(500).json(err)
                else if (result && result.length > 0 && result[0].recovery_exp > new Date().getTime()) {
                    res.jsonp('success')
                } else {
                    res.status(404).jsonp('Recovery link expired')
                }
            }
        )
    } else {
        res.status(403).jsonp("Bad request")
    }
}

exports.updatePassword = function (req, res, next) {
    if ((req.body.link || (req.body.ID && req.body.currentPassword)) && req.body.newPassword) {
        var fulllink = "/rl=" + req.body.link
        var conditionStatement = req.body.ID ? "user_id=? and password=sha2(?, 0)" : "recovery_link=?"
        var condition = [req.body.newPassword]
        if (req.body.ID) condition = condition.concat([req.body.ID, req.body.currentPassword])
        else condition = condition.concat([fulllink])
        conn.query(`update user set password=sha2(?,0) where ${conditionStatement};`, condition,
            (err, result) => {
                if (err) res.status(500).json(err)
                else if (result && result.affectedRows > 0) {
                    res.jsonp('success')
                } else {
                    res.status(500).jsonp('Current Password is not correct')
                }
            }
        )
    } else {
        res.status(403).jsonp("Bad request")
    }
}

exports.updatePreference = function (req, res, next) {
    if (req.session.user && req.body.departTimeId && req.body.arriveTimeId
        && req.body.flightClassId && req.body.maxPrice && req.body.sortById) {
        const { departTimeId, arriveTimeId, flightClassId, maxPrice, sortById } = req.body
        const preferenceId = req.session.user.preference.preferenceId
        conn.query(`update preference set depart_time=?, arrive_time=?, flight_class=?,
                    max_price=?, sort_by=? where preference_id=?;`,
            [departTimeId, arriveTimeId, flightClassId, maxPrice, sortById, preferenceId],
            (err, result) => {
                console.log(err)
                console.log(result)
                if (err) res.status(500).json(err)
                else if (result && result.affectedRows > 0) {
                    req.session.user.preference = req.body
                    req.session.user.preference.preferenceId = preferenceId
                    res.jsonp('success')
                } else {
                    res.status(500).jsonp('Bad server response')
                }
            })
    } else {
        res.status(403).jsonp("Bad request")
    }
}