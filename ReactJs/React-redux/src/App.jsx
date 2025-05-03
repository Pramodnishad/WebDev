import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByValue, reset } from './features/counter/CounterSlice'

const App = () => {

  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  const [inputValue, setInputValue] = useState(0)
  function handleIncement() {
    dispatch(increment())
  }
  function hanldeDecrement() {
    dispatch(decrement())
  }
  function handleIncrementByValue() {
    dispatch(incrementByValue(Number(inputValue)))
  }

  function hanldeReset(){
    dispatch(reset())
  }
  return (
    <div>
      <button onClick={handleIncement}>+</button>
      <p>the value is{count}</p>
      <button onClick={hanldeDecrement}>-</button>
      <input type='number'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type='submit' onClick={handleIncrementByValue}>IncrementByValue</button>

      <button onClick={hanldeReset}>Reset</button>
    </div>
  )
}

export default App