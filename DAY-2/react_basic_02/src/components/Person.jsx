import React from 'react'

const Person = (props) => {

    console.log(props);
    // props => properties
  return (
    <div>
    <h1>name : {props.name} </h1>
    <h1>age : {props.age} </h1>
    <h1>city : {props.city} </h1>
    <h1>country : {props.country} </h1>
        
   
    </div>
  )
}

export default Person
