import React, { useEffect, useState } from 'react'

const MultiEffect = () => {
    const [count , setCount] = useState(0)
    const [seconds , setSeconds] = useState(0)

    useEffect(()=>{
        console.log("count change ",count)
    },[count])
    useEffect(()=>{
        const intervalId = setInterval(()=>{
            console.log("interval id ")
            setSeconds(preseconds => preseconds +1)
        },1000)
 console.log("cleaning")
        return ()=>{
            console.log("time to stop")
            clearInterval(intervalId)
        }
    },[])
  return (
    <div>
        <h1>count: {count}</h1>
        <button onClick={()=>setCount(count+1)}>Increament Count:</button>
        <h2>seconds: {seconds}</h2>
    </div>
  )
}

export default MultiEffect