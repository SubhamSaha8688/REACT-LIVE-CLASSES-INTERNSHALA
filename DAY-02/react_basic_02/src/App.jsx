import React from 'react'
import Person from './components/Person'
import Car , {Bmw , Audi  , RangeRover} from './components/Car'

const App = () => {

  //UPPER WORLD => FOR , WHILE , LET , VAR , IF-ELSE 
	
	
  //LOWER WORLD => MAP , FOREACH , FILTER , TERNARY OPERTOR
  return (
    <>
    {/*name is an attribute => props*/}
      <Person />
      <Person></Person>
      <Person  name = "Subham"/>
      <Person name = "Subham Saha" age = {20} />
      <Person name = "Subham Saha" age = {20} city = "Hyderabad" />
      <Person name = "Subham Saha" age = {20} city = "Hyderabad" country = "India" />
      <br />
      <Car />
      <Bmw />
      <Audi />
      <RangeRover />
    </>
    
  )
}

export default App
