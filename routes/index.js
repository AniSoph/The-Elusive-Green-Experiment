
/*We are using the Router class.
This enable us to export the routing logic as a module and use it in the main app.js.*/
var express = require('express');
var router = express.Router();
/*const MongoClient = require('mongodb').MongoClient;


// connect to the db and start the express server
let db;

// ***Replace the URL below with the URL for your database***
const url = 'mongodb+srv://akurdydy:Solnushko96%3F@database-h1iao.mongodb.net/test?retryWrites=true&w=majority';

MongoClient.connect(url, function(err, db) {
  useUnifiedTopology: true
  if (err) throw err;
  console.log("Database created!");
  db.close();
});
*/
/* '/' - it is the path of the GET request. It’s anything that comes after your domain name.
The second argument is a callback function that tells the server what to do when the path is matched.
It takes two arguments, a request object and a response object.
Here we use render method that comes with responde object.*/

/*Instructions - GET home page.*/
router.get('/', function(req, res, next ) {
  res.render('index');
});

/*Preferences Survey - GET REQUEST.*/
router.get('/survey', function(req, res, next ) {
  res.render('preferenceSurvey');
});

/*Product Category Selection page - GET REQUEST.*/
router.get('/selectcategory',function(req, res, next ) {
  res.render('productCategory');
});

/*Product Choice Selection page - GET REQUEST.*/
router.get('/selectproduct',function(req, res, next ) {
  res.render('productChoice');
});

/*Product Choice Clothing page - GET REQUEST.*/
router.get('/clothing',function(req, res, next ) {
  res.render('productChoiceClothing');
});

/*Product Choice Electronics page - GET REQUEST.*/
router.get('/electronics',function(req, res, next ) {
  res.render('productChoiceElectronics');
});

/*Product Choice Cosmetics page - GET REQUEST.*/
router.get('/cosmetics',function(req, res, next ) {
  res.render('productChoiceCosmetics');
});

/*Product Choice Home page - GET REQUEST.*/
router.get('/home',function(req, res, next ) {
  res.render('productChoiceHome');
});

/*Delivery Choice - GET REQUEST.*/
router.get('/delivery',function(req, res, next ) {
  res.render('productDeliveryChoice');
});

/*Final Feedback Survey page - GET REQUEST.*/
router.get('/surveyandfeedback',function(req, res, next ) {
  res.render('surveyAndFeedback');
});

/*Thank you page - GET REQUEST.*/
router.get('/thankyou',function(req, res, next ) {
  res.render('thankYouPage');
});

/*router.post('/surveyResult',function(req, res, next ) {
  db.collection('surveyResult'). save(req.body, (err, result) => {
    if (err) return console.log(err)
    console.log('saved to database')
    res.redirect('/')
  })
});*/

module.exports = router;
