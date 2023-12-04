var express = require('express');
var router = express.Router();

/* GET users listing. */

/* about_us */
router.get('/about_us', function(req, res, next) {
  res.send('会社概要');
});

/* flow */
router.get('/flow', function(req, res, next) {
  res.send('インテリアコーディネート');
});

module.exports = router;
