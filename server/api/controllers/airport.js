const conn = require('../connector');

exports.getList = function (req, res, next) {
    if (req.session.user) {
        conn.query('select * from airport',
            (err, result) => {
                if (err) res.status(500).jsonp(err)
                res.jsonp(result)
            })
    } else {
        res.status(403).jsonp("Bad request")
    }
};