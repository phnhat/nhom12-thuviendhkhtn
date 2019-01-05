var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('info', { title: 'Thông tin chi tiết' });
});

module.exports = router;
