import React from 'react'
import Person from './components/Person'
import Sachinnn, { Rohit, Virat } from './components/Cricket'
import Hello from './components/Hello'
import Looping from './components/Looping'
import Random from './components/Random'
import Evennts from './components/Evennts'
import NameChange from './components/NameChange'

const App = () => {
  return (
    <div>
      <Person />
      <Sachinnn runs = "100" centuries = "100"/>
      <Virat />
      <Rohit />
      <Hello />
      <Looping />
      <Random />
      <Evennts />
      <NameChange naam = "Subham"/>
    </div>
  )
}

export default App
