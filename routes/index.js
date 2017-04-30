var express = require('express');
var router = express.Router();

var db = require('../queries');

// respond with "hello world" when a GET request is made to the homepage
router.get('/', function (req, res) {
  res.send('puppy database')
})

router.get('/api/puppies', db.getAllPuppies);
router.get('/api/puppies/:id', db.getSinglePuppy);
router.post('/api/puppies', db.createPuppy);
router.put('/api/puppies/:id', db.updatePuppy);
router.delete('/api/puppies/:id', db.removePuppy);


module.exports = router;
