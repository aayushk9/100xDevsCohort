import { useState } from 'react'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'
import { resolveConfig } from 'vite' 

function App() {

const [todos, setTodos] = useState([])

fetch('https://localhost:3000/todo')
   .then(async function(res){
      const json = await res.json();
         setTodos(json.todos)
      })  


  return (
      <div>
         <CreateTodo/>
         <Todos todos={todos}/>
      </div>
  )
}

export default App
