const conn = require('../connector')
const uuidv5 = require('uuid/v5')

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
                    require('./mailer')({
                      recipients: [signupEmail],
                      subject: "AST6 - Welcome",
                      html: require('../templates/signup')
                    }, function () {
                      res.jsonp("success")
                    })
                  } else {
                    res.status(500).jsonp('Bad server response')
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

exports.getFlights = function (req, res, next) {
  if (req.session.user) {
    conn.query(`select booking_number as bookingNumber, departFrom, arriveTo, departure_datetime as departTime, arrival_datetime as arriveTime
                from user_book_flight u,
                flight f,
                (select flight_id, city as departFrom from flight join airport on depart_from = code) d, 
                (select flight_id, city as arriveTo from flight join airport on arrive_to = code) a
                where 
                user_id=? and u.flight_id = f.flight_id and 
                f.flight_id = d.flight_id and f.flight_id = a.flight_id`, [req.session.user.ID],
      (err, results) => {
        if (err) res.status(500).jsonp(err)
        else if (results) {
          res.jsonp(results)
        } else {
          res.status(500).jsonp('Bad server response')
        }
      })
  } else {
    res.status(403).jsonp("Bad request")
  }
}

exports.getBookingDetail = function (req, res) {
  if (req.session.user && req.query.bn) {
    conn.query(`select passenger.passenger_ID as passengerId, booking_status as bookingStatus, confirmation_email as confirmationEmail,
                ID_Type as IDType, passenger_firstname as firstName, passenger_lastname as lastName,
                passenger_middleinitial as middleInitial
                from booking_passenger, passenger 
                where booking_number=? and
                booking_passenger.passenger_ID = passenger.passenger_ID;`, [req.query.bn],
      (err, results) => {
        if (err) res.status(500).jsonp(err)
        else if (results) {
          res.jsonp(results)
        } else {
          res.status(500).jsonp('Bad server response')
        }
      })
  } else {
    res.status(403).jsonp("Bad request")
  }
}

exports.cancelBooking = function (req, res) {
  if (req.session.user && req.body.isAll !== undefined && req.body.bookingNumber && req.body.cancellations) {
    const { isAll, bookingNumber, cancellations } = req.body
    var passengerIds = []
    cancellations.forEach(cancellation => {
      passengerIds.push(cancellation.passengerId)
    })
    conn.query(`update booking_passenger set booking_status='Cancelled' where booking_number=? ${isAll ? "" : "and passenger_ID in (?)"};`,
      [bookingNumber, passengerIds], (err, results) => {
        if (err) res.status(500).jsonp(err)
        else if (results) {
          conn.query(`select flight_id, flight_class from user_book_flight where user_id=? and booking_number=?;`, [req.session.user.ID, bookingNumber],
            (err, result) => {
              if (err) res.status(500).jsonp(err)
              else if (result) {
                const flightClass = result[0].flight_class
                conn.query(`update flight set ${flightClass}_seats=(${flightClass}_seats + ${passengerIds.length})
                  where flight_id=?;`, [result[0].flight_id], (err, result) => {
                  if (err) res.status(500).jsonp(err)
                  else if (result) {
                    res.jsonp("success")
                  } else {
                    res.status(500).jsonp('Bad server response')
                  }
                })
              } else {
                res.status(500).jsonp('Bad server response')
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

exports.sendRecoveryLink = function (req, res, next) {
  if (req.query.email) {
    conn.query("select user_id from user where email=?", [req.query.email], (err, result) => {
      if (err) res.status(500).jsonp(err)
      else if (result && result.length === 1) {
        var now = new Date().getTime()
        var recovery_link = "/rl=" + uuidv5(`${req.query.email}${now}`, '1b671a64-40d5-491e-99b0-da01ff1f3341') // it is unique link
        var recovery_exp = now + (1000 * 60 * 15) // 15 minutes
        conn.query('update user set recovery_link=?, recovery_exp=? where email=?;', [recovery_link, recovery_exp, req.query.email],
          (err, result) => {
            if (err) res.status(500).jsonp(err)
            else if (result && result.affectedRows > 0) {
              require('./mailer')({
                recipients: [req.query.email],
                subject: "AST6 - Password Recovery",
                content: `Hi there, \nPlease change your password with the following link: http://localhost:3000${recovery_link}`
              }, function () {
                res.jsonp("success")
              })
            } else {
              res.status(500).jsonp('Bad server response')
            }
          })
      } else {
        res.jsonp('Found no matching email in system')
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