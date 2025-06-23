import React from 'react'

const Hello = () => {
    let obj = {
        a : 10,
        b : 20,
        c : {
            d : 30,
            e : 40
        }
    }

    let arr = [1, 2, 3, 4, 5]
  return (
    <div>
      <h1>object1 : {obj.a}</h1>
        <h1>object2 : {obj.b}</h1>
        <h1>object3 : {obj.c.d}</h1>
        <h1>object4 : {obj.c.e}</h1>
      <h1>array : {arr}</h1>
        <h1>array0 : {arr[0]}</h1>
    </div>
  )
}

export default Hello
