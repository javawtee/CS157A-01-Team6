const conn = require("../connector")
const SHA1 = require("../../sha1")

function getPreferredTime(id) {
    condition = "and time(departure_datetime)"
    switch (id) {
        case 'before12':
            return condition + " < time('12:00:00')";
        case '12to6':
            return condition + " between time('12:00:00') and time('18:00:00')";
        case 'after6':
            return condition + " > time('18:00:00')";
        default:
            return "";
    }
}

function getOptions(fclass, max, passengers, sort) {
    var seats = null
    var maxPrice = null
    switch (fclass) {
        case "eco":
            seats = `and economy_seats >= ${passengers}`
            maxPrice = `and economy_price <= ${max}`
            break
        case "bus":
            seats = `and business_seats >= ${passengers}`
            maxPrice = `and business_price <= ${max}`
            break
        default: // fclass = 'all'
            seats = `and (economy_seats >= ${passengers} or business_seats >= ${passengers})`
            maxPrice = `and (economy_price <= ${max} or business_price <= ${max})`
    }

    var sortBy = null
    switch (sort) {
        case 'depTime':
            sortBy = 'time(departure_datetime) ASC'
            break
        case 'arrTime':
            sortBy = 'time(arrival_datetime) ASC'
            break
        case "price":
            if (fclass === "eco") {
                sortBy = "economy_price ASC"
            } else if (fclass === "bus") {
                sortBy = "business_price ASC"
            } else {
                sortBy = "economy_price ASC, business_price ASC"
            }
            break
        default:
            sortBy = ""
    }
    return `${seats} ${maxPrice} order by ${sortBy}`;
}

exports.searchFlight = function (req, res, next) {
    if (req.session.user && req.query.depart && req.query.arrive && req.query.fclass && req.query.max && req.query.passengers && req.query.sort) {
        var [depCode, depDate, depTime] = req.query.depart.split('|')
        var arrCode, arrDate, arrTime

        const getFlightTime = time => {
            return time !== "any" ? ` ${getPreferredTime(time)}` : ""
        }

        if (req.query.roundtrip === "y") {
            [arrCode, arrDate, arrTime] = req.query.arrive.split('|')
        } else {
            arrCode = req.query.arrive
        }

        var { fclass, max, passengers, sort } = req.query
        var extraConditions = getOptions(fclass, max, passengers, sort) + ";"
        var query = `select flight_id as flightId, 
                     departure_datetime as depTime, 
                     arrival_datetime as arrTime, 
                     economy_price as ecoPrice, economy_seats as ecoSeats,
                     business_price as busPrice, business_seats as busSeats
                     from flight 
                     where depart_from=? and date(departure_datetime)=? and arrive_to=?`

        var queryForDepart = query + getFlightTime(depTime)
        queryForDepart += extraConditions
        // get depart flight
        conn.query(queryForDepart, [depCode, depDate, arrCode], (err, result) => {
            if (err) res.status(500).jsonp(err)
            else if (result) {
                const departFlights = result
                var returnFlights = []
                if (req.query.roundtrip === "y") {
                    // get return flight if roundtrip
                    var queryForReturn = query + getFlightTime(arrTime)
                    queryForReturn += extraConditions
                    conn.query(queryForReturn, [arrCode, arrDate, depCode], (err, result) => {
                        if (err) res.status(500).jsonp(err)
                        else if (result) {
                            res.jsonp({ departFlights, returnFlights: result })
                        } else {
                            res.status(500).jsonp('Bad server response while fetching return flights')
                        }
                    })
                } else {
                    res.jsonp({ departFlights, returnFlights })
                }
            } else {
                res.status(500).jsonp('Bad server response while fetching depart flights')
            }
        })
    } else {
        res.status(403).jsonp("Bad request")
    }
}

// function: finalizeBooking
// 1. generateBookingNumber = SHA1(userID + departFlightCode + currentTimeInMs).substr(5, 7)
// 2. insert passenger (skip duplicate error)
// 3. insert booking_passenger
// 4. insert user_book_flight
// 5. insert booking
// 6. update seat left
// 7. repeat 1 to 6 if return flight defined
// @@ return None
exports.finalizeBooking = function (req, res, next) {
    if (req.session.user && req.body.departFlight && req.body.passengers) {
        const insertData = function (type, flightData, callback) {
            const extractFlightClassAndPrice = flight => {
                return flight["ecoPrice"] ? ["economy", flight.ecoPrice] : ["business", flight.busPrice]
            }

            // extract meta data from given flight
            var { flightId, bookingNumber, flightClass } = flightData
            var [bookingClass, bookingPrice] = extractFlightClassAndPrice(flightData)

            conn.query("insert into user_book_flight values (?,?,?);", [req.session.user.ID, bookingNumber, flightId], (err, result) => {
                console.log(err)
                if (err) res.status(500).jsonp(err)
                else if (result && result.affectedRows > 0) {
                    conn.query("insert into booking (booking_number, booking_class, booking_price) values (?, ?, ?);",
                        [bookingNumber, bookingClass, bookingPrice], (err, result) => {
                            console.log(err)
                            if (err) res.status(500).jsonp(err)
                            else if (result && result.affectedRows > 0) {
                                conn.query(`update flight set ${flightClass}_seats=(${flightClass}_seats - ${listOfPassengers.length})
                                    where flight_id=?`, [flightId], (err, result) => {
                                    console.log(err)
                                    if (err) res.status(500).jsonp(err)
                                    else if (result && result.affectedRows > 0) {
                                        callback()
                                    } else {
                                        res.status(500).jsonp(`Bad server response while update number of seats left for ${type}`)
                                    }
                                })
                            } else {
                                res.status(500).jsonp(`Bad server response while insert booking data for ${type}`)
                            }
                        })
                } else {
                    res.status(500).jsonp(`Bad server response while insert user_has_flight data for ${type}`)
                }
            })
        }

        var listOfPassengers = []
        var bookingPassengers = []
        var confirmationEmails = []
        const departBookingNumber =
            SHA1(`${req.session.user.ID}${req.body.departFlight.flightDepartFrom}${new Date().getTime()}`).substr(5, 7).toUpperCase()
        console.log(req.body.returnFlight)
        var returnBookingNumber = ""
        if (req.body.returnFlight) {
            returnBookingNumber =
                SHA1(`${req.session.user.ID}${req.body.returnFlight.flightDepartFrom}${new Date().getTime()}`).substr(5, 7).toUpperCase()
        }

        req.body.passengers.forEach(passenger => {
            const { IDNumber, IDType, firstName, lastName, middleInitial, reservationEmail } = passenger
            listOfPassengers.push([IDNumber, IDType, firstName, lastName, middleInitial || null])
            bookingPassengers.push([departBookingNumber, IDNumber, reservationEmail])
            if (req.body.returnFlight) {
                bookingPassengers.push([returnBookingNumber, IDNumber, reservationEmail])
            }
            console.log(reservationEmail)
            if (reservationEmail) {
                confirmationEmails.push(reservationEmail)
            }
        })
        console.log(confirmationEmails)
        conn.query(`insert into passenger (passenger_ID, ID_Type, passenger_firstname, 
                    passenger_lastname, passenger_middleinitial) values ?;`,
            [listOfPassengers], (err, result) => {
                console.log(err)
                if (err && err.errno !== 1062) { // errno 1062: duplicate entry
                    res.status(500).jsonp(err)
                } else if ((err && err.errno === 1062) || (result && result.affectedRows > 0)) {
                    conn.query(`insert into booking_passenger(booking_number, passenger_ID, confirmation_email) values ?;`,
                        [bookingPassengers], (err, result) => {
                            console.log(err)
                            if (err) res.status(500).jsonp(err)
                            else if (result && result.affectedRows > 0) {
                                req.body.departFlight.bookingNumber = departBookingNumber
                                insertData("Depart Flight", req.body.departFlight, () => {
                                    if (req.body.returnFlight) {
                                        req.body.returnFlight.bookingNumber = returnBookingNumber
                                        insertData("Return Flight", req.body.returnFlight, () => {
                                            if (confirmationEmails.length > 0) {
                                                require('./mailer')({
                                                    recipients: confirmationEmails,
                                                    subject: "AST 6 - Booking Confirmation",
                                                    content: `Hi there, \nThanks for choosing our service
                                                                        \n\nHere is your departure booking number: ${departBookingNumber}
                                                                        \nHere is your return booking number: ${returnBookingNumber}`
                                                })
                                            }
                                            res.jsonp("success") // success inserted return flight
                                        })
                                    } else {
                                        if (confirmationEmails.length > 0) {
                                            require('./mailer')({
                                                recipients: confirmationEmails,
                                                subject: "AST 6 - Booking Confirmation",
                                                content: `Hi there, \nThanks for choosing our service
                                                                    \n\nHere is your departure booking number: ${departBookingNumber}`
                                            })
                                        }
                                        res.jsonp("success") // success inserted depart flight
                                    }
                                })
                            } else {
                                res.status(500).jsonp(`Bad server response while insert booking_passenger data for ${type}`)
                            }
                        })
                } else {
                    res.status(500).jsonp(`Bad server response while insert passenger data`)
                }
            })
    } else {
        res.status(403).jsonp("Bad request")
    }
}