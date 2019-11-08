const conn = require('../connector')

exports.getList = (req, res, next) => {
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

exports.signedIn = (req, res, next) => {
    if(req.session.user){
        res.jsonp(req.session.user)
    }
    res.jsonp(undefined)
}

exports.signIn = (req, res, next) => {
    if (req.body.userId && req.body.password) {
        conn.query('select count(id) as C, id, user_name as name from test_login where user_id=? and password=sha2(?,0);',
            [req.body.userId, req.body.password], (err, result) => {
                if (err) res.status(500).send(err)
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

exports.signOut = (req, res, next) => {
    req.session.destroy(err => {
        if(err) res.status(500).json(err)
        res.clearCookie(process.env.SESS_NAME)
        res.jsonp(undefined)
    })
}