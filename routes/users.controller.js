const uuid = require('uuid/v4')
const db = require('../db')


const insertUser = async function (req, res, next){
    const { fullname, email } = req.body;
    const key = uuid();
    const insertQuery =  `INSERT INTO users (fullname, email, user_key) VALUES ($1,$2,$3) returning user_key`
    const dbResp = await db.query(insertQuery, [fullname,email,key]); 
    res.status(200).json(dbResp)
}



module.exports = {
    insertUser
}







