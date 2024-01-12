import { useState } from 'react'
import React, {Fragment} from 'react'
import './App.css'

let counter = 4;

function App() {
 const [todos, setTodos] = useState([
  {
    id: 1,
    title: 'Go to Gym',
    description: 'At 6 AM'
  },
  {
    idf: 2,
    title: 'Study DSA',
    description: 'In the morning'
  },
  {
    id: 3,
    title: 'Do WebRTC',
    description: 'Everyday'
  }])

  function addTodo(){
    setTodos([...todos, {
      id: counter++,
      title: 'Study MERN',
      description: '2 Hours'
    }])
  }
  return (
    <>
    <button onClick={addTodo}>Add a new todo</button>
     todos.map(todo = <Todo id={todos.id} title={todos.title} description={todos.description} />
     )
    </>
  )
}



function Todo({title, description}){
 return <div>
  <h1>{title}</h1>
  <h5>{description}</h5>
 </div>
}

export default App
