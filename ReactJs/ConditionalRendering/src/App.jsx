import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginBtn from './components/LoginBtn'
import LogoutBtn from './components/LogoutBtn'

function App() {
  const [loggedIn, setLoggedIn] = useState(false)

    // if (loggedIn) {
    //   return (
    //     <>
    //       <LogoutBtn />
    //     </>
    //   )
    // } else {
    //   return (
    //     <>
    //       <LoginBtn />
    //     </>
    //   )
    // }
//  Using ternary operator
    // return(
    //   <div>
    //     {loggedIn ? <LogoutBtn/> : <LoginBtn />}
    //   </div>
    // )

// Using Logical operator

// return (
//   <div>
//     {loggedIn && <LogoutBtn/>}
//   </div>
// )
// Using Early retrun

if(!loggedIn){
  return <LoginBtn/>
}

return (
  <div>
    {loggedIn && <LogoutBtn/>}
  </div>
)

}

export default App
