import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';

function App() {
   const [exChangeData, setExchangeData] = useState({});
   const [bankData, setBankData] = useState({});
   console.log('Re-rendered');

   useEffect(() => {
    setTimeout(() => {
      setBankData({income: 100})
     }, 3000)
   }, [])
   
   useEffect(() => {
    setTimeout(() => {
      setExchangeData({
        returns: 100
      });
     }, 1000)
   },[])

   const incomeTax = (bankData.income + exChangeData.returns) * 0.3;

  return (
  
    <div>
        Hii there your income tx returns are {incomeTax}
    </div>
  )
}

export default App
