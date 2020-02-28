const uuid = require('uuid/v4')
const db = require('../db')

const insertHappy = async function(req, res, next){
    let emotion = parseInt(req.body.emotion);
    let date = new Date(); 
    date = `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`; 
    const id = uuid();
    if(typeof emotion !== 'number'){
      return res.status(400).json('need to send request body as an object');
    };
    switch(emotion){
      case 0: 
      emotion = "happy"
      break;
      case 1: 
      emotion = "meh"
      break;
      case 2: 
      emotion = "sad"
      break;
      default: 
      emotion = 'bad request'
      break;
    };
    if(emotion === 'bad request'){
        res.status(400).json('no value');
        return;
    }
    let insertQuery = `INSERT INTO wellness (val,text,rid,date) VALUES ($1,$2,$3,$4) returning id`; 
    let dbResp = await db.query(insertQuery, [req.body.emotion, emotion, id, date]); 
    res.status(200).json(dbResp[0].id); 
};
  
  
const getAllEmotions = async function(req,res,next){
  const getAllQuery = `SELECT * FROM wellness`;
  let dbResp = await db.query(getAllQuery); 
  if(dbResp.length === 0){
    res.status(200).json('nothing to see')
  }
  res.status(200).json(dbResp)
};

  module.exports ={
      insertHappy, 
      getAllEmotions 
  }