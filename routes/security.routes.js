const { checkSecurityKey } = require('./security.controller')
var express = require('express');
var router = express.Router();



router.use(checkSecurityKey)

module.exports = router; 