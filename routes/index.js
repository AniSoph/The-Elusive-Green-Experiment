
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

module.exports = router;
