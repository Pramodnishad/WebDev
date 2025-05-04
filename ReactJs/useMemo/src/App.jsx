import React from 'react'
import { useMemo } from 'react'
import { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  const [input, setInput] = useState(0)

  function handleIncrement() {
    setCount(count + 1)
  }

  function expensiveTask(num){
    console.log("Inside expensive task")
    for(let i=0; i<= 100000; i++ ){}
    return num*2
  }

  let doubleValue = useMemo(()=> expensiveTask(input),[input])


  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleIncrement}>Increament</button>
      <br />
      <br />
      <input type='number'
        placeholder='enter number'
        value={input}
        onChange={(e) => setInput(e.target.value)} />
        <h1>Doubled value:{doubleValue}</h1>
    </div>
  )
}

export default App