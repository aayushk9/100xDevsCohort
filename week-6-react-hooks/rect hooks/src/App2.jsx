import { useState } from 'react'
import React, {Fragment} from 'react'
import './App.css'


export function App2() {

  //  complicated syntax
  return (
    <>
    <CardWrapper>
      Hi  there
    </CardWrapper>
    </>
  )
  }

  function CardWrapper({childern}){
    return <div>
      style={{border: '2px', color: 'solid black'}}
           {innerComponent}
     </div>
  }


