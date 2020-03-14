require('dotenv').config()
const uuid = require('uuid/v4')
const db = require('../db')

const insertUser = async function (req, res, next){
    const { fullname, email } = req.body;
    const key = uuid();
    const insertQuery =  `INSERT INTO users (fullname, email, user_key) VALUES ($1,$2,$3) returning user_key`
    const dbResp = await db.query(insertQuery, [fullname,email,key]); 
    sendKeyViaEmail(email,key)
    res.status(200).json(dbResp)
}

const sendKeyViaEmail = function (email, key){
    const nodemailer = require('nodemailer');
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'jfa.emotions@gmail.com',
          //create enviro password. 
          pass: process.env.EMAIL_PASSWORD
        }
      });
      var mailOptions = {
        from: 'jfa.emotions@gmail.com',
        to: `${email}`,
        subject: 'Sending Email using Node.js',
        html: `<h1 style='color:red'>The API Key is: ${key}</h1>`
      };

    transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
    });
};


module.exports = {
    insertUser
}







