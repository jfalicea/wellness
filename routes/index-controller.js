const uuid = require('uuid/v4')
const db = require('../db')

const insertEmotion = async function(req, res, next){
    let emotion = parseInt(req.body.emotion);
    const id = uuid();
    console.log(typeof emotion)
    if(emotion !== 0 & emotion !== 1 & emotion !== 2){
      return res.status(400).json('request sent should\'ve been a number, and the value should be 0 for happy, 1 for ok, 2 for sad.');
    };
    switch( emotion ){
      case 0: 
      emotion = "sad"
      break;
      case 1: 
      emotion = "ok"
      break;
      case 2: 
      emotion = "happy"
      break;
      default: 
      emotion = 'bad request'
      break;
    };
    if(emotion === 'bad request'){
        res.status(400).json('no value');
        return;
    }
    let insertQuery = `INSERT INTO wellness (emotionVal,emotionText,emotionTransactionId, userKey) VALUES ($1,$2,$3,$4) returning emotionTransactionId`; 
    let dbResp = await db.query(insertQuery, [req.body.emotion, emotion, id, res.locals.userKey]); 
    res.status(200).json(dbResp); 
};
  
  
const getAllEmotions = async function(req,res,next){
  const userKey = res.locals.userKey
  const getAllQuery = `SELECT emotiontext,emotiontransactionid, emotionval, timestamp FROM wellness WHERE userkey = $1`;
  let dbResp = await db.query(getAllQuery,[userKey]); 
  if(dbResp.length === 0){
    res.status(200).json('nothing to see');
  }
  res.status(200).json(dbResp);
};

  module.exports ={
      insertEmotion, 
      getAllEmotions 
  };