// Goal of the webpage: let users sign up to your website and only allow signed in users to see people, create dummy list of 7-8 people
 // hashing -> converting string to some 01210 jibrish (1 way)
 // encryptioin ->(2 way) can be converted from string to jebrish and from jebrish to string
 // json web tokens -> takes some json as input ({name: 'Aayush}) and gives some long string this tring is called token

 // website with two endpoints
 // post request/signin with 2 inputs username and password and returns json web token with username encrypted 
 // get request/users return arrays of users if user is signed in (token is correct)  returns 403 status code if not

 const express = require('express');
 const jwt = require('jsonwebtoken');
 const jwtPassword = '123456';
 const mongoose = require('mongoose');

 const app = express();
 app.use(express.json()); 

function userExists(username, password){
    let userExists = false;
  for(let i = 0; i < users.length; i++){
    if(users[i].username == username && users[i].password == password){
       userExists = true;
    }
  }
  return userExists;
}

app.post('/signin', (req, res)=> {
    const username = req.body.username;
    const password = req.body.password;

    if(!userExists(username, password)){
        return res.status(400).json({
            msg: 'No user found'
        })
    } 
 
    // new user
    const user = new Users({
        username: username,
        password: password
    })
    user.save()
    res.json({
        mgs: 'user signed up'
    })


    // jwt.sign
    var token = jwt.sign({username: username}, password);
    return res.json({
        token,
    });
});
    
app.get('/users', (req, res)=> {
    const token = req.headers.authorization;
    try{
        const decoded = jwt.verify(token, jwtPassword);
        const username = decoded.username;
        return res.json({
           All_USERS:  users.filter(function(value){
            if(value.username == username){
                return true;
            } else {
                return false;
            }
           })
        })
    } catch(err){
        return res.status(403).json({
            msg: 'Invalid token'
        })
    }
})

 app.listen(3000);


 //authentication recap 
 /*
 - jwt to create tokens
 - user gets back a token after the signin request
 - user sends back tokens in all authenticated requests
  */
