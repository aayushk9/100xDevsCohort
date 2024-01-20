import { useCallback, useState } from 'react'
import './App.css'
import { useEffect } from 'react';


function App() {

  const [exChangeData1, setExChangeData1] = useState({});
  const [exChangeData2, setExChangeData2] = useState({});
  const [bankData, setBankData] = useState({});
  
  console.log('re-rendered')

  useEffect(() => {
    setTimeout(() => {
      setExChangeData1({
        returns: 100
      })  
    })
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setExChangeData2({
        returns: 100
      })
    })
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setBankData({
        income: 100
      })
    }, 5000)
  }, [setExChangeData1, setExChangeData2]);
  

  // useCallback lets const be equal
  const cryptoReturns = useCallback(function(){
     return exChangeData1.returns + exChangeData2.returns
  }, [exChangeData1, exChangeData2])


  const incomeTax = (cryptoReturns + bankData.income) * 0.3



  return (
    <div>
      Hii there, your income tax returns are {incomeTax}
    </div>
  )
}

export default App


// both useEffect and useMemo let u skip executing some logic between re-renders based on dependency array