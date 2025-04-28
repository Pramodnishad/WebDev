import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // function handleClick() {
  //   alert('Kahe dabawat haye re')
  // }
  // function handleMOuseHover() {
  //   alert("Kha ghoomat hawe re")
  // }
  // function handleSubmit(e) {
  //   e.preventDefault()
  //   alert("Form submit karwa de")
  // }
  const [clicks, setClicks] = useState(0)
  function handleClickOutside() {
    setClicks(clicks + 1)
  }
  function getRandomColor() {
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)
    return `rgb(${r},${g},${b})`
    
  }

  function changeBgColor() {
    //  let bgColor = document.body.style
    //   bgColor.backgroundColor = getRandomColor()
    document.body.style.backgroundColor = getRandomColor()

  }
  return (

    <div onClick={handleClickOutside} style={{
      height: "100vh",
      width: "100vw",
      // backgroundColor: "#f0f0f0",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    }}>
      {/* <p onMouseEnter={handleMOuseHover}>Hello working professionals</p>
        <button onClick={handleClick}>Click me</button> */}

      {/* <form onSubmit={handleSubmit}>
        <input type='text' />
        <button type='submit' >Submit</button>
      </form> */}

      {/*  This is called immediatly invocation of function which is not good practicse use this using arrow function*/}
      {/* <button onClick={alert("DOnt click")} >Click me</button> */}
      {/* <button onClick={()=>alert("Its clicked using arrow function")} >Click me</button> */}


      {/* Color changer */}

      <button onClick={changeBgColor}>Change color</button>
      <p>clicks on page change {clicks}</p>

    </div>

  )
}

export default App
