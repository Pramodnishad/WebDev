import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { useCallback } from 'react'
import { useState } from 'react'

const Expensive = () => {
    const [count, setCount] = useState(0)
    const [text, setText] = useState('')
    const previousFunction = useRef()

    const expensiveCalculation = useCallback(()=>{
        console.log("Expensive calculation...")
        let result = 0;
        for(let i=0; i<=1000000; i++){
            result += i
        }
        return result
    },[count])

    useEffect(()=>{
        if(previousFunction.current){
            if(previousFunction === expensiveCalculation){
                console.log("Function not recreated")
            } else console.log("function got recreated")
        } else{
            previousFunction.current =expensiveCalculation
        }
    },[expensiveCalculation])
  return (
    <div>
        <input 
        type='text'
        value={text}
        onChange={(e)=>setText(e.target.value)}
        placeholder='type something...' />
        <br />
        <p>Expensive calculation result:{expensiveCalculation()}</p>
        <br />
        <button onClick={()=>setCount(count+1)}>Increment count</button>
    </div>
  )
}

export default Expensive