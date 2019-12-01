const express = require('express')
const router = express.Router()

const User = require('./controllers/user')
const Airport = require('./controllers/airport')
const Flight = require('./controllers/flight')

router.get('/', (req, res, next) => {
  res.status(200).send('HI, we are TEAM 6')
})

// user
router.get('/user/list', User.getList)
router.get('/user/signedin', User.signedIn)
router.post('/user/signup', User.signUp)
router.post('/user/signin', User.signIn)
router.get('/user/signout', User.signOut)
router.get('/user/recoverylink', User.sendRecoveryLink)
router.get('/user/confirmrecoverylink', User.confirmRecoveryLink)
router.post('/user/updatepassword', User.updatePassword)
router.put('/user/updatepreference', User.updatePreference)
router.get('/user/getflights', User.getFlights)
router.get('/user/getbookingdetail', User.getBookingDetail)
router.post('/user/cancelbooking', User.cancelBooking)

// airport
router.get('/airport', Airport.getList)

// flight
router.get('/flight', Flight.searchFlight)
router.post('/flight/finalizebooking', Flight.finalizeBooking)


module.exports = router