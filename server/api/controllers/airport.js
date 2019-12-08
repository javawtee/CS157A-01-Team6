const conn = require('../connector');

exports.getList = function (req, res, next) {
    if (req.session.user) {
        conn.query('select code, name, city, state from airport, location where airport.location_id = location.location_id;',
            (err, result) => {
                console.log(err)
                if (err) res.status(500).jsonp(err)
                res.jsonp(result)
            })
    } else {
        res.status(403).jsonp("Bad request")
    }
};