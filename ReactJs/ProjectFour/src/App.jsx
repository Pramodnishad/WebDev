import React from 'react'
import './App.css'
import Card from './components/Card'
import { useState } from 'react'
import ParentToggle from './components/ParentToggle'

function App() {

  const [name, setName] = useState('')
  return (

    <div>
      {/* <Card name={name} setName={setName} />
      <Card name={name} setName={setName} /> */}

      {/* <h1>Dono card me name likh kr dikhao{name}</h1> */}


      {/* Toggle useCase */}

      <ParentToggle />


    </div>

  )
}

export default App
