const jwt = require('jsonwebtoken');
// decode verify generate

// new sbi acccount
const value = {
    name: 'Aayush',
    accountnNumber: 12123
}

// jwt
const token = jwt.generate(value, 'secret');
// token genrated using secret therefore token can be verified using secret 
console.log(token)
const signeToken= jwt.sign
const verifiedToken = jwt.verify


// person trying to duplicate sbi account
const duplicateValue = {
    name: 'Aayush',
    accountnNumber: 12123
}

// jwt
const duplicateToken = jwt.generate(value, 'nxjsnjs');
// token genrated using secret therefore token can be verified using secret 
console.log(duplicateToken)
const verifyToken = jwt.verify('encoded message we got');
