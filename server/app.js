var createError = require('http-errors');
var express = require('express');
var bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const nodemailer = require('nodemailer');
var session = require('express-session');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

// view engine setup
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Static folder
app.use('/public', express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const {
  // Can add port and NODE_ENV here.

  // secret needs to be based on a better string
  SESS_SECRET='team6!@secret',
  SESS_NAME= 'sid' ,
  SESS_LIFETIME = 1000 * 60 * 60 // 60 minute expiration
} = process.env

/*
 Depending on which store we use, we need
  const store = new (storename)){
    host: 'localhost', port: 3693, pass: 'secret'
  })
*/
app.use(session( {
  // Session id for the cookie. defaults to 'connect.sid'
  name: SESS_NAME, 
  // Whether to for-save sessions back to store, even if if they were not modified
  // deprecated, ensure it is explicitly set to false
  resave: false, 
  // whether to force-save uninitialized sessions to the store. Don't want to
  // save empty sessions. 
  saveUninitialized: false, 
  //store

  // secret key to sign the session ID. it validates the cookies
  // to make sure they weren't edited on the client. 
  secret: SESS_SECRET,  
  cookie: {
    // set the time before the cookie expires.
    maxAge: SESS_LIFETIME,
    // controls how cookies are sent with cross-site requests.
    // could cause problems in older browsers, shouldn't matter for project
    // set it to true because it should do no harm
    sameSite: true 
    // Not needed but can be set if security becomes a concern.   
    //secure: IN_PROD
  }
}))

/*
app.get('/', (req, res) => {
  res.render('contact');
});
*/

//app.use('/', express.static(path.join(__dirname, 'demo')));
//require('./routes')
app.use('/', require('./api/routes'))

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  //res.render('error');
});

module.exports = app;
