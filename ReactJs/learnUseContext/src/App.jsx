// import React, { createContext, useContext, useState } from 'react'
// import ChildA from './components/ChildA'


// const UserContext =createContext()

// const App = () => {
//   const [user, setUser] = useState({ name: "Pramod Nishad" })
//   return (
//     <>
//       <UserContext.Provider value={user}>
//         <ChildA />
//       </UserContext.Provider>
//     </>
//   )
// }

// export default App
// export { UserContext }


import React, { createContext, useState } from 'react'
import ChildC from './components/ChildC'
import './App.css'
const ThemeContext = createContext()
const App = () => {
  const [theme, setTheme] = useState('light')
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div id='container' style={{
        backgroundColor: theme === 'light' ? 'beige' : "black"
      }}>
        <ChildC />
      </div>
    </ThemeContext.Provider>
  )
}

export default App
export { ThemeContext }