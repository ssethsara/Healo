// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');


var logger = require('morgan');
var favicon = require('serve-favicon');
var cookieParser=require('cookie-parser');

var session=require('express-session');
var passport=require('passport');
var expressValidator=require('express-validator');
var flash=require('connect-flash');
var session = require('express-session');
var LocalStrategy=require('passport-local');
var multer=require('multer');

// Get our API routes
const api = require('./server/api');
const users = require('./server/users');
const child = require('./server/child');

const app=express();



//handle File Uploads
var upload = multer({ dest: './uploads' });

// Parsers for POST data
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
  secret:'secret',
  saveUninitialized:true,
  resave:true
}))
app.use(cookieParser());



//middleware for express


//view Engine
app.set('views', path.join(__dirname, 'dist'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('json spaces', 40);

//passport saveUninitializ

app.use(passport.initialize());
app.use(passport.session());



// In this example, the formParam value is going to get morphed into form body format useful for printing.
app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));




// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

//connect flash
app.use(flash());

//Global var
app.use(function (req, res, next) {
  res.locals.messages = require('express-messages')(req, res);

res.locals.success_msg=req.flash('Success_msg');
res.locals.error_msg=req.flash('error_msg');
res.locals.error=req.flash('error');

  next();
});

// Set our api routes
app.use('/api', api);
app.use('/users', users);
app.use('/child', child);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));