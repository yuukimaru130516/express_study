var express = require('express');
var router = express.Router();

/* GET users listing. */

/* about_us */
router.get('/about_us', function(req, res, next) {
  res.render('about_us');
});

/* flow */
router.get('/flow', function(req, res, next) {
  res.render('flow');
});


/* cordinate */
router.get('/cordinate', function(req, res, next) {
  res.render('cordinate');
});

module.exports = router;
