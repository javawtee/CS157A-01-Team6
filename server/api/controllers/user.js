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
                        res.status(500).jsonp(err)
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