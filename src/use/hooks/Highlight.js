import { useState, useEffect } from 'react';

const Highlight = (props) => {
  const [highlight, setHighlight] = useState(false)
  useEffect(() => {
    setHighlight(true)
    setTimeout(() => {
      setHighlight(false)
    }, 700);
  }, [props])
  return (
    highlight
  )
}

export default Highlight;