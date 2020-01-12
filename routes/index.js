/*We are using the Router class.
This enable us to export the routing logic as a module and use it in the main app.js.*/
var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");

/*TREATMENT RANDOMIZATION*/

//Server creates initialise local UserId
var id = 1;
//Create new User Id for the following participants
function generateID() {
  id = id + 1;
  return id;
};

//Get local UserId from Server and send the ID to the Client
router.get("/id", function(req, res, next) {
  //Create variable with the specific ID
  var HoldId = generateID()
  //Create Object with all IDs
  //id (key) : "HoldId" (value)
  var ObjectId = {
    id: HoldId
  }
  res.send(ObjectId)
  //Server responds and sends ID to the Client
});

/*PAGE RENDERING*/

/*Instructions - GET home page.*/
router.get('/', function(req, res, next) {
  res.render('index');
});

/*Preferences Survey - GET REQUEST.*/
router.get('/survey', function(req, res, next) {
  res.render('preferenceSurvey');
});

/*Product Category Selection page - GET REQUEST.*/
router.get('/selectcategory', function(req, res, next) {
  res.render('productCategory');
});

/*Product Choice Selection page - GET REQUEST.*/
router.get('/selectproduct', function(req, res, next) {
  res.render('productChoice');
});

/*Product Choice Clothing page - GET REQUEST.*/
router.get('/clothing', function(req, res, next) {
  res.render('productChoiceClothing');
});

/*Product Choice Electronics page - GET REQUEST.*/
router.get('/electronics', function(req, res, next) {
  res.render('productChoiceElectronics');
});

/*Product Choice Cosmetics page - GET REQUEST.*/
router.get('/cosmetics', function(req, res, next) {
  res.render('productChoiceCosmetics');
});

/*Product Choice Home page - GET REQUEST.*/
router.get('/home', function(req, res, next) {
  res.render('productChoiceHome');
});

/*Treatment - GET REQUEST.*/
router.get('/processing', function(req, res, next) {
  res.render('processing');
});

/*Delivery Choice - GET REQUEST.*/
router.get('/delivery', function(req, res, next) {
  res.render('productDeliveryChoice');
});

/*Final Feedback Survey page - GET REQUEST & POST*/

router.get('/surveyandfeedback', function(req, res, next) {
  res.render('surveyAndFeedback');
});

//Declare data structure - Schema using mongoose
var User = new mongoose.Schema({
  country: String,
  sex: String,
  age: Number,
  region: String,
  firstName: String,
  lastName: String,
  email: String,
  final: String
});

//Name the model
var User = mongoose.model("elusiveGreen", User);

//To process user entries and pass it to MongoDB
router.post('/survey2', (req, res) => {
  var myData = new User(req.body);
  myData.save()
    .then(item => {
      res.render('thankYouPage');
    })
    .catch(err => {
      res.status(400).send("unable to save to database");
    });
});

/*Thank you page - GET REQUEST.*/
router.get('/thankyou', function(req, res, next) {
  res.render('thankYouPage');
});

module.exports = router;
