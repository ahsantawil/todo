var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.json({ message: 'Router API'});
});

module.exports = router;
