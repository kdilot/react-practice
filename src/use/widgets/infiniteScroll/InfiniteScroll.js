import React, { useState, useEffect } from 'react';
import styles from './InfiniteScroll.module.scss';

const InfiniteScroll = () => {
  const [data, setData] = useState(Array.from({ length: 5 }))
  const [percentage, setPercentage] = useState(0)
  const [currentScroll, setScroll] = useState(window.pageYOffset)
  
  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.pageYOffset)
    }
    window.addEventListener('scroll', handleScroll, true)
    setPercentage(((currentScroll + window.innerHeight) / document.body.clientHeight) * 100)
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [currentScroll])

  useEffect(() => {
    if (percentage > 98) {
      setData(d => d.concat(Array.from({ length: 10 })))
    }
  }, [percentage])

  return (
    <div className={styles.wrapper}>
      {data.map((m, i) =>
        <div className={styles.item} key={i}>
          {i + 1}
        </div>
      )}
    </div>
  );
};

export default InfiniteScroll;