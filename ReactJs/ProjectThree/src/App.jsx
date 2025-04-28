import React, { useState } from 'react'
import './App.css'
import Card from './components/Card'
import Button from './components/Button'

function App() {
const [count , setCount] = useState(0)
function handleIncreament(){
  setCount(count+1);
}
  return (
      <div>
        <Button handleClick={handleIncreament} text="click me">
          <h1>{count}</h1>
        </Button>
     {/* <Card>
      <p>Hello , Ram Ram jee bhai sare log</p>
      <p>Hello , Kuch nhi bas aise hi</p>
     </Card>
     <Card children={'hello worling from last'}>

     </Card> */}
      </div>
 
  )
}

export default App
