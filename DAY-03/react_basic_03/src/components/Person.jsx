import React from 'react'

const Person = () => {
  let a = 10;
  let b = "sam";
  let c = null;
  let d = undefined;
  let e = true;

  return (
    <div>
      <h1>a :{a}</h1>
      <h1>b :{b}</h1>
      <h1>c :{c}</h1>
      <h1>d :{d}</h1>
      <h1>e :{e}</h1>
      <h1>c : {JSON.stringify(c)}</h1>
      <h1>d : {JSON.stringify(d)}</h1>
      <h1>e : {JSON.stringify(e)}</h1>
    </div>
  )
}

export default Person
