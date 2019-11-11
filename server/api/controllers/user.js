const conn = require('../connector')
const uuidv5 = require('uuid/v5')

exports.getList = function (req, res, next) {
    conn.query('SELECT * FROM test_login', (err, rows) => {
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
        console.log(req.session.user)
        res.jsonp(req.session.user)
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
                    res.jsonp('success')
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
        conn.query(`select count(user_id) as C, user_id, first_name, last_name, middle_initial, joined_datetime from user 
                    where email=? and password=sha2(?,0);`, [req.body.email, req.body.password],
            (err, result) => {
                if (err) res.status(500).jsonp(err)
                if (result === undefined || result[0].C === 0)
                    res.jsonp(undefined)
                else {
                    delete result[0].C
                    let user = result[0]
                    req.session.user = user
                    res.jsonp(user)
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