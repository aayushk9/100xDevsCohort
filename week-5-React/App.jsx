import { useState } from 'react'
import './App.css'

function App() {

  const [todos, setTodos] = useState([
    {
    title: 'Go to Gym',
    description: 'Go to gym before 11 PM',
    Completed: false
    },
    {
      title: 'Complete DSA',
      description: 'Complete DSA Before 1 PM',
      Completed: true
      },
]);

function addTodos(){
  setTodos([...todos, {
   title: 'new todo',
   description: 'description of new todo'
}])
}

 return (
  <div>
    <button onClick={addTodos}>Add a TODO</button>
      {todos.map(function(todo){
        return <Todo title={todo.title} description={todo.description}></Todo>
      })}
  </div>
 )
}

function Todo(props){
  return  <div>
      <h1>{props.title}</h1>
      <h1>{props.description}</h1>
    </div>
}

export default App
