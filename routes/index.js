var express = require('express');
var fs = require('fs');
const path = require('path');
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

/* POST update plot */
router.post('/plot/:name', function(req, res) {
  fs.writeFile(path.join(__dirname, `../public/image/${req.params.name}.png`), req.body.image, 'base64', (err) => {
    err ? res.sendStatus(500) : res.end();
  });
});

module.exports = router;
