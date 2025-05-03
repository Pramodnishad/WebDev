import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  function handleAbout() {
    navigate('/about')
  }
  return (
    <div>
      <button onClick={handleAbout}>Move to about</button>
    </div>
  )
}

export default Home