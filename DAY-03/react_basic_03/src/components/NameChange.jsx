import React from 'react'

const NameChange = ({naam}) => {

    let name = naam;

    function handleChange() {
        console.log(name , "1st");
        name = "Saha";
        console.log(name , "2nd");
    }
  return (
    <div>
        <h1>Name : {name}</h1>
        <button onClick={handleChange}>Logout Me!! </button>
      
    </div>
  )
}

export default NameChange
