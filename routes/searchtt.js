var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var params = req.query;
  res.render('searchtt', {
     type: params.t, 
     query: params.q 
    });
});

module.exports = router;