import React from 'react'

const Looping = () => {
    let arr = [10, 20, 30, 40, 50];
  return (
    <div>
      {arr.map((item, index) => {
        return (
          <h1 key={index}> {index} -{item}</h1>
        )
      })
    }

            
    </div>
  )
}

export default Looping
