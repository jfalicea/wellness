var express = require('express');
var router = express.Router();
const { insertHappy, getAllEmotions } = require('./index-controller')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/happy', getAllEmotions)
router.post('/happy', insertHappy)








module.exports = router;
