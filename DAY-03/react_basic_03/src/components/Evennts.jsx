import React from 'react'

const Evennts = () => {
    function handleClick1() {
        console.log("Button 1 clicked");
      }
    
      function handleClick2() {
        console.log("Button 2 clicked");
      }
    const handleClick3 = (a) => {
        console.log("Button 3 clicked with argument", a);
      }

  return (
    <div>
        {/* way - 1 */}
      <button onClick={handleClick1}>Click Me</button>
      <button onClick={handleClick2}>Click Me</button>
        {/* way - 2 */}
        <button onClick={() => handleClick3(10)}>Click Me</button>
    </div>
  )
}

export default Evennts
