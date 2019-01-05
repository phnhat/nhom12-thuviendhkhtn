var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  var params = req.query;
  if (params.q == "toan cao cap" || params.q == "toan" || params.q == "cao cap" || params.q == "toan cao" || params.q == "cap" || params.q === "toan cap") {
    res.render('search', {
      t: params.t,
      q: params.q,
      number: "3",
      condition: true
    });
  } else {
    
    res.render('search', {
      t: params.t,
      q: params.q,
      number: "0",
      condition: false
    });
  }
});

module.exports = router;
