// it loads the express module and uses it to get an express.Router object
var express = require('express');

// We are using the Router class.
// This enable us to export the routing logic as a module and use it in the main app.js.
var router = express.Router();

//  it specifies a route on that object and lastly exports the router from the module
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


// (this is what allows the file to be imported into app.js)
module.exports = router;
