const express = require('express');
const app = express();
// Middlewares are mostly used for authentication and user validation
app.use(express.json());

function userMiddleware(req, res, next){
    const username = req.headers.username;
    const password = req.headers.password;
   // verification of users
   if(username != 'Aayush' && password != 'pass'){
       res.status(400).json({
        msg: 'Something worng with inputs'
       })
   } else{
    next();
   }
}

function kidneyMiddleware(req, res, next){
    const kidneyId = req.query.kidneyId;
    // kidney verification
    if(kidneyId != 1 && kidneyId != 2){
        res.status(400).json({
            msg: 'Wrong kidney Id'
        })
    } else {
        next();
    }
}

app.get('/health-checkup', userMiddleware, kidneyMiddleware, (req, res)=> {
     // logic
     res.send('You have healthy kidneys');
})

app.post('/health-checkup', (req, res)=> {
    const kidneys = req.body.kidneys;
    const kidneysLength = kidneys.length;

    res.send(`You have ${kidneysLength} kidneys`);
});

app.use((err, req, res, next)=> {
    res.json({
        msg: 'Sorry Something is up with our server'
    })
})

app.listen(3001)