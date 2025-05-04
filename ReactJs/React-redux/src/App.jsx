// import React, { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { decrement, increment, incrementByValue, reset } from './features/counter/CounterSlice'

// const App = () => {

//   const count = useSelector((state) => state.counter.value)
//   const dispatch = useDispatch()
//   const [inputValue, setInputValue] = useState(0)
//   function handleIncement() {
//     dispatch(increment())
//   }
//   function hanldeDecrement() {
//     dispatch(decrement())
//   }
//   function handleIncrementByValue() {
//     dispatch(incrementByValue(Number(inputValue)))
//   }

//   function hanldeReset(){
//     dispatch(reset())
//   }
//   return (
//     <div>
//       <button onClick={handleIncement}>+</button>
//       <p>the value is{count}</p>
//       <button onClick={hanldeDecrement}>-</button>
//       <input type='number'
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//       />
//       <button type='submit' onClick={handleIncrementByValue}>IncrementByValue</button>

//       <button onClick={hanldeReset}>Reset</button>
//     </div>
//   )
// }

// export default App



// for fetching user data


import React, { lazy, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from './features/user/userSlice'

const App = () => {
  const usersData = useSelector((state) => state.user.users)
  const loading = useSelector((state) => state.user.loading)
  const dispatch = useDispatch()
  console.log(usersData)

  useEffect(() => {
    dispatch(fetchUsers())
    setTimeout(() => {
      setIsLoading(false)
    }, 5000);
  }, [dispatch])
  return (
    <div>
      <h1>Users:</h1>
      {
        loading ? <p>loading le rha hai bhai</p> :
          usersData.map(user => (
            <p key={user.id}>{user.name}</p>
          ))

      }
    </div>
  )
}

export default App