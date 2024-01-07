const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());
const URI = process.env.MONGODB_URI

mongoose.connect(URI); 

const userSchema = new Schema({
    username: String,
    password: String
});

const Users = mongoose.model('Users', userSchema );

app.post('/signup', (req, res)=> {
    const username = re.body.username;
    const password = req.body.password;

    const exstingUser = new Users.findOne({username: 'aayush'});

    if(exstingUser){
        return res.status(400).json({
            msg: 'Username already exists'
        })
    } 

    const user = new Users({
        username: username,
        password: password
    });

    user.save();
    res.json({
        msg: 'User signed in'
    })
})

// create update delete read

app.listen(3000);