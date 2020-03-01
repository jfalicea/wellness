var express = require('express');
var router = express.Router();
const { insertEmotion, getAllEmotions } = require('./index-controller')


router.get('/happy', getAllEmotions)
router.post('/happy', insertEmotion)








module.exports = router;
