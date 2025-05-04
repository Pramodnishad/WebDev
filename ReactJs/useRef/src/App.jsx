// import React from 'react'
// import { useRef } from 'react'
// import { useState } from 'react'

// const App = () => {
//   const [count, setCount] = useState(0)

//   let val = useRef(0)
//   let btnRef = useRef()
//   function handleIncrement() {
//     val.current = val.current + 1
//     console.log(val.current)
//     setCount(count + 1)
//   }
//   function handleDecrement() {
//     setCount(count - 1)
//   }
//   function changeColor() {
//     btnRef.current.style.backgroundColor = "red"

//   }
//   return (
//     <div >
//       <button ref={btnRef} onClick={handleIncrement} style={{
//         padding: "10px"
//       }}>Increment</button>
//       <p>Count value{count}</p>
//       <button onClick={handleDecrement} style={{
//         padding: "10px"
//       }}>Decrement</button>
//       <button onClick={changeColor} style={{
//         padding: "10px"
//       }}>Change color</button>
//     </div>
//   )
// }

// export default App



import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'

const App = () => {
  const [time, setTime] = useState(0)
  let timerRef = useRef(null)

  function startTimmer() {
    timerRef.current = setInterval(() => {
      setTime(time => time + 1)
    }, 1000)
  }

  function stopTimmer() {
    clearInterval(timerRef.current)
    timerRef.current = null
  }
  function resetTimmer() {
    stopTimmer()
    setTime(0)
  }
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "20px"
    }}>
      <h1>StopWatch: {time} seconds</h1>
      <button onClick={startTimmer}>Start</button>
      <button onClick={stopTimmer}>Stop</button>
      <button onClick={resetTimmer}>Reset</button>
    </div>
  )
}

export default App