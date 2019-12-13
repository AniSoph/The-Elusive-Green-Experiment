
/*We are using the Router class.
This enable us to export the routing logic as a module and use it in the main app.js.*/

var express = require('express');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next ) {
  res.render('index', { title: 'Express' });
});

/*Product Category Selection page - GET REQUEST*/
 router.get('/selectcategory',function(req,res, next ) {
    res.render('productCategory');
 });

/* Product Choice Selection page - GET REQUEST*/
  router.get('/selectproduct',function(req,res, next ) {
     res.render('productChoice');
  });

/*Final Feedback Survey page - GET REQUEST*/
   router.get('/surveyandfeedback',function(req,res, next ) {
      res.render('surveyAndFeedback');
   });

 /*Last thank you page - GET REQUEST*/
    router.get('/thankyou',function(req,res, next ) {
       res.render('thankYouPage');
    });

module.exports = router;
