import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const LogerComponents = () => {
    const [count , setCount] = useState(0)
    useEffect(()=>{
        console.log("Component rendered or count changed",count)
    })
  return (
    <div>
        <h1>Count:{count}</h1>
        <button onClick={()=>setCount(count+1)}>Increment</button>
    </div>
  )
}

export default LogerComponents