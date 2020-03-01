var express = require('express');
var router = express.Router();
const db = require('../db')


let checkSecurityKey = async function (req,res,next){
    const key = req.query.userid
    const checkKeyQuery =`SELECT user_key FROM users WHERE user_key = $1`
    const dbResp = await db.query(checkKeyQuery,[key])
    if(!dbResp.length){
        res.status(401).json('You are not authorized.  Please send a valid user key')
    }
    res.locals.userKey = dbResp[0].user_key
    next()
}



router.use(checkSecurityKey)

module.exports = router; 