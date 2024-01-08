const express = require('express');
const app = express();

function isOldEnoughMiddleware(req, res, next){
  const age = req.query.age;
  if(age > 18){
    next();
  } else {
     res.json({
        msg: 'Sorry you are under age'
     })
  }
}

app.get('/ride1', isOldEnoughMiddleware, (req, res)=> {
   res.json({
    msg: 'You have successfully riden the ride'
   })
})
