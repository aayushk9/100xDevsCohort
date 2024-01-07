const zod = require('zod');
const express = require('express');
const { parseAst } = require('vite');
const app = express();

app.use(express.json());

const schema = zod.object({
    email: zod.string(),
    password: zod.string(),
    kidneys2: zod.array(zod.number())
})


function validateSchema(){
    
    const response = schema.safeParse(obj);
    console.log(response);
}

app.post('/health-checkup', (req, res)=> {
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys);
    if(!response.success){
        res.status(411).json({
           msg: 'Invalid'
        })
    } else {
    res.send({
        response
    });
}
})

app.post('/signup', (req, res)=> {
    // email is input and pasword is inpu validation
    
    const input = req.body;
    const response = validateSchema(req.body);
    if(!response.success){
        res.json({
            msg: 'Invalid inputs'
        })
        return;
    } else{
        res.json({
            response
        })
    }
})

app.listen(4000)