import React, { useState } from 'react';
import Button from 'layout/ex01/Button';

const Counter = () => {
  const [value, setValue] = useState(0)
  return (
    <div>
      <p>
        The Count value is <b>{value}</b>.
      </p>
      <Button title={'+1'} event={() => { setValue(value + 1) }} />
      <Button title={'-1'} event={() => { setValue(value - 1) }} />
      <button onClick={() => { setValue(value + 1) }}>+1</button>
      <button onClick={() => { setValue(value - 1) }}>-1</button>
    </div>
  )
}

export default Counter;