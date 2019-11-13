const conn = require("../connector")

function getPreferredTime(id) {
    switch (id) {
        case 'before12':
            return "< time('12:00:00')";
        case '12to6':
            return "between time('12:00:00') and time('18:00:00')";
        case 'after6':
            return "> time('18:00:00')";
        default:
            return null;
    }
}

function getOptions(fclass, max, passengers, sort) {
    // TODO: fclass, max, passengers and sort(price) are used to find ticket
    var sortBy = null
    switch (sort) {
        case 'depTime':
            sortBy = 'departure_datetime'
            break;
        case 'arrTime':
            sortBy = 'arrival_datetime'
            break;
        default:
            break;
    }
    return ` order by ${sortBy} ASC`;
}

exports.searchFlight = function (req, res, next) {
    if (req.session.user) {
        var [depCode, depDate, depTime] = req.query.depart.split('|')
        var { fclass, max, passengers, sort } = req.query
        var query = "select flight_id from flight where depart_from=? and date(departure_datetime)=?";
        query += depTime !== "any" ? ` and time(departure_datetime) ${getPreferredTime(depTime)}` : "";
        query += getOptions(fclass, max, passengers, sort) + ";"
        conn.query(query, [depCode, depDate], (err, result) => {
            if (err) {
                console.log(err)
                res.status(500).jsonp(err)
            }
            console.log(result)
        })
        res.jsonp("something")
    } else {
        res.status(403).jsonp("Bad request")
    }
}