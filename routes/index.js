var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Thư viện trường Đại học Khoa học tự nhiên' });
});

module.exports = router;
