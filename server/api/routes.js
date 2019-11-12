const express = require('express')
const router = express.Router()

const User = require('./controllers/user')

router.get('/', (req, res, next) => {
  res.status(200).send('HI, we are TEAM 6')
})

// user
router.get('/user/list', User.getList)
router.get('/user/signedin', User.signedIn)
router.post('/user/signup', User.signUp)
router.post('/user/signin', User.signIn)
router.get('/user/signout', User.signOut)


module.exports = router