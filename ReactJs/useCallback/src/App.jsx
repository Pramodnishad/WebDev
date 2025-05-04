// import React from 'react'
// import { useState } from 'react'
// import Child from './components/Child'
// import { useCallback } from 'react'

// const App = () => {
//   const [count, setCount] = useState(0)
//   // function handleClick() {
//   //   setCount(count + 1)
//   // }

//   const handleClick = useCallback(() => {
//     setCount(count + 1)
//   }, [count])

//   return (
//     <div>
//       <div>
//         count:{count}
//       </div>
//       <br />
//       <div>
//         <button onClick={handleClick}>
//           Increment
//         </button>
//       </div>
//       <br />
//       <div>
//         <Child buttonName="click to kr bhai 3" handleClick={handleClick} />
//       </div>
//     </div>
//   )
// }

// export default App




import React from 'react'
import Expensive from './components/Expensive'

const App = () => {
  return (
    <div>
      <Expensive />
    </div>
  )
}

export default App