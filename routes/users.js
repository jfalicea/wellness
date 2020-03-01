var express = require('express');
var router = express.Router();
const { insertUser } = require('./users.controller') 



router.post("/", insertUser)

module.exports = router;
