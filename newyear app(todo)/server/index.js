const express = require('express');
const { createTodo } = require('./types');
const { todo } = require('./db');
const app = express();

app.use(express.json());

app.post('/todo', async()=> {
    const createPayLoad = req.body;
    const parsedPayLoad = createTodo.safeParse(createPayLoad);
    if(!parsedPayLoad.success){
        req.status(411).json({
            msg: 'You sent wrong request'
        })
        return;
    }
      // put in database
        await todo.create({
            title: createPayLoad.title,
            description: parsedPayLoad.description
        })

        res.json({
            msg: 'created todo'
        })
    
})

app.get('/todos', async(req, res)=>{
   //const todo = await todo.find()

   res.json({
    todo
   })

})

app.put('/completed', async()=>{
    const updatePayLoad = req.body;
    const parsedPayLoad = updateTodo.safeParse(updatePayLoad);
    if(!parsedPayLoad.success){
        req.status(411).json({
            msg: 'You sent wrong inputs'
        })
        return;
    }
    await todo.update({
        _id: req.body.id 
    }, {
        completed: true
    })

    res.json({
        msg: 'Todo marked as completed'
    })
})

app.listen(3000, ()=>{
     console.log('server is listening')
})