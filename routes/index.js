var express = require('express');
var router = express.Router();
var app = express();

var db = require('../queries.js');

router.get('/api/puppies', db.getAllPuppies);
router.get('/api/puppies/:id', db.getSinglePuppy);
router.post('/api/puppies', db.createPuppy);
router.put('/api/puppies/:id', db.updatePuppy);
router.delete('/api/puppies/:id', function(req, res) {
  console.log("reached endpoint")
  var query = {"_id": req.params.id}
  db.removePuppy(req, res, test);
});

function test() {
  console.log("I am the next!")
}
module.exports = router;
