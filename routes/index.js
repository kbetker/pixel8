var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Pixel8: Your source for the latest Game info!' });
});

module.exports = router;
