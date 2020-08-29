var express = require('express');
const { path } = require('../app');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({
    "data": 10,
    "stuff": 5
  })
});

module.exports = router;
