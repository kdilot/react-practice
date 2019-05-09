import React, { useState, useEffect } from 'react'

const Hook = () => {

  const [count, setCount] = useState(0)

  useEffect(() => {
    // Update the document title using the browser API
  })

  return (
    <div>
      <p>You Clicked {count} times</p>
      <button onClick={() => { setCount(count + 1) }}>Click me</button>
    </div>
  );
};

export default Hook;