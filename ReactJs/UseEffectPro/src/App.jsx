import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import LogerComponents from './components/LogerComponents'
import TimerComponent from './components/TimerComponent'
import DataFechter from './components/DataFechter'
import ResizeComponent from './components/ResizeComponent'
import MultiEffect from './components/MultiEffect'

function App() {
  // const [count, setCount] = useState(0)
  // const [total, setTotal] = useState(0)

  // Variaton no.1
  // useEffect(()=>{
  //   alert("hello, I will run on Each render")
  // })

  // Variaton no.2
  // useEffect(()=>{
  //   alert("I will run on only first render")
  // },[])
// Variaton no.3
  // useEffect(()=>{
  //   alert("I will render on each count")
  // },[count])

// Variaton no.4
  // useEffect(() => {
  //   alert("I will on each render of count or total")
  // }, [count, total])

  // Variaton no.5

//   useEffect(()=>{
//     alert("When count is updated")
//     return()=>{
// alert("when count is unmounted")
//     }
//   },[count])
//   function handleClick() {
//     setCount(count + 1)
//   }
//   function handleTotal() {
//     setTotal(total + 1)
//   }
  return (
    <div>
      {/* <p>count is {count}</p>
      <button onClick={handleClick}>Click me</button>
      <p>total is {total}</p>
      <button onClick={handleTotal}>Total me</button> */}


      {/* <LogerComponents/> */}
      {/* <TimerComponent /> */}
      {/* <DataFechter /> */}
      {/* <ResizeComponent /> */}
      {/* <MultiEffect /> */}
    </div>

  )
}

export default App
