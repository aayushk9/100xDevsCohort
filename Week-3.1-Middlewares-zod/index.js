const express = require('express');

const app = express();

app.get('/health-checkup', (req, res)=> {
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyId = req.query.kidneyId;

    if(!(username == 'Aayush' && password == 'pass')){
        res.json({
            msg: 'Somethings wrong with your inputs'
        })
    }

    if(kidneyId != 1 && kidneyId != 2){
        res.status(400).json({
            msg: 'Somethings up with your inputs'
        })
        return;
      }  

    res.json({
        msg: 'Your kidney is fine'
    })
    
    //res.status(400).json({msg: 'Something is wrong with your input'})
})

app.listen(3000);