var express = require('express');
var router = express.Router();
var hr = 0;
var rr = 0;

/* GET HR and RR JSON object */
router.get('/', function(req, res, next) {
  res.json({hr, rr}).end();
});

/* POST update HR and RR */
router.post('/', function(req, res) {
  hr = req.body.hr;
  rr = req.body.rr;
  res.end();
});

module.exports = router;
