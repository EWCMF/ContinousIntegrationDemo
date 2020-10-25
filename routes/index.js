var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var functions = require('../code/functions')

  var result = functions.add(2, 2);

  res.render('index', { title: 'Express', result: result });
});

module.exports = router;
