var express = require('express');
var router = express.Router();


router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});

module.exports = router;
