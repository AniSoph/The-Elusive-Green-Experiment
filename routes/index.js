
/*We are using the Router class.
This enable us to export the routing logic as a module and use it in the main app.js.*/

var express = require('express');

var router = express.Router();

/*Instructions - GET home page.*/
router.get('/', function(req, res, next ) {
  res.render('index', { title: 'Express' });
});

/*Preferences Survey - GET REQUEST.*/
router.get('/survey', function(req, res, next ) {
  res.render('preferenceSurvey');
});

/*Product Category Selection page - GET REQUEST.*/
router.get('/selectcategory',function(req,res, next ) {
  res.render('productCategory');
});

/*Product Choice Selection page - GET REQUEST.*/
router.get('/selectproduct',function(req,res, next ) {
  res.render('productChoice');
});

/*Product Choice Clothing page - GET REQUEST.*/
router.get('/clothing',function(req,res, next ) {
  res.render('productChoiceClothing');
});

/*Product Choice Electronics page - GET REQUEST.*/
router.get('/electronics',function(req,res, next ) {
  res.render('productChoiceElectronics');
});

/*Product Choice Cosmetics page - GET REQUEST.*/
router.get('/cosmetics',function(req,res, next ) {
  res.render('productChoiceCosmetics');
});

/*Product Choice Home page - GET REQUEST.*/
router.get('/home',function(req,res, next ) {
  res.render('productChoiceHome');
});

/*Delivery Choice - GET REQUEST.*/
router.get('/delivery',function(req,res, next ) {
  res.render('productDeliveryChoice');
});

/*Final Feedback Survey page - GET REQUEST.*/
router.get('/surveyandfeedback',function(req,res, next ) {
  res.render('surveyAndFeedback');
});

/*Thank you page - GET REQUEST.*/
router.get('/thankyou',function(req,res, next ) {
  res.render('thankYouPage');
});

module.exports = router;
