var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('signup', { title: 'Đăng ký', layout:false });
});


router.get('/success', function(req, res, next) {
  res.render('signupsuccess', { title: 'Đăng ký thành công', layout:false });
});

module.exports = router;
