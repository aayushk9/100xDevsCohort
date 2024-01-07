import { useState } from 'react'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { ToDos } from './components/ToDos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <CreateTodo/>
      <ToDos/>
    </div>
  )
}

export default App
