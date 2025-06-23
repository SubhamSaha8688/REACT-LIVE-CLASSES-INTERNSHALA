// import React from 'react'

// const Random = () => {
//     let magicNum = 7;
//     let rh = Math.floor(Math.random() * 10) ;
//     let el ;
//     if (rh === magicNum) {
//         el = <h1>Hurray! You guessed the magic number {magicNum}</h1>
//     } else {
//         el = <h1>Oops! You guessed the wrong number {rh}</h1>
//     }
//   return (
//     <div>
//       {el }
//     </div>
//   )
// }

// export default Random

//-----------------------------------------------------------------------------

import React from 'react'

const Random = () => {
    let magicNum = 7;
    let rn = Math.floor(Math.random() * 10) ;
     
  return (
    <div>
      {rn === magicNum ?
      <h1>Hurray! You guessed the magic number {rn}</h1> :
      <h1>Oops! You guessed the wrong number {rn}</h1>}
      {rn}
    </div>
  )
}

export default Random