const express = require('express')
const router = express.Router()
const conn = require('./api/dalMySQL')

router.get('/', (req, res, next) => {
  res.status(200).send('HI, we are TEAM 6')
})

router.get('/user/list', (req, res, next) => {
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
});

router.post('/signin', (req, res, next) => {
  conn.query('select count(id) as C, id from test_login where user_id=? and password=sha2(?,0);',
    [req.body.userId, req.body.password], (err, result) => {
      if(err) res.status(500).send(err)
      if(result[0].C == 0)
        res.status(200).send('Email/ password is not correct')
      else 
        res.jsonp(result[0].id)
  })
})

module.exports = router