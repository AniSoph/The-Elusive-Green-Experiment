
// the main project folder
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var sassMiddleware = require('node-sass-middleware');
var bodyParser = require('body-parser');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// connect to MongoDB
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://akurdydy:helloworld@onlineexperiment-h1iao.mongodb.net/elusiveGreen?retryWrites=true&w=majority";
const client = new MongoClient(uri, {useNewUrlParser: true});
client.connect(err => {
  const collection = client.db("elusiveGreen").collection("elusiveGreen");
  // perform actions on the collection object
  client.close();
});

// get access to mongoose
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb+srv://akurdydy:helloworld@onlineexperiment-h1iao.mongodb.net/elusiveGreen?retryWrites=true&w=majority",{useNewUrlParser: true});
//Get the default connection
var db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); // to specify the template library - EJS

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// convert the user input into JSON format for data storage
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(sassMiddleware({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  indentedSyntax: true, // true = .sass and false = .scss
  sourceMap: true
}));


//app.use(express.static(path.join(__dirname, 'node_modules')));
// to serve static files, we need to use the express.static.
// By default, express cannot access to the files in other folders.
app.use(express.static(path.join(__dirname, 'node_modules')));
app.use(express.static(path.join(__dirname, 'public')));


// define particular routes for the different parts of the site
app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// this is what allows it to be imported by /bin/www
module.exports = app;
