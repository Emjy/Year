var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  let year = new Date().getFullYear();
  res.send({ year });
});

module.exports = router;
