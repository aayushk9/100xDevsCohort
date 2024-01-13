import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import './App.css'

const Dashboard = lazy(() => import('./Dashboard'))
const  Landing = lazy(() => import('./Landing'))
import { Suspense, lazy } from 'react'


function App() {
  
  return (
    <div>
       <BrowserRouter>
        <Appbar />
        <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>  
  )
}

function Appbar() {
  const navigate = useNavigate();

  return <div>
      <div>
        <button onClick={() => {
          navigate("/");
        }}>Landing page</button>

        <button onClick={() => {
          navigate("/dashboard");
        }}>Dashboard</button>

      </div>
  </div>
}

export default App

