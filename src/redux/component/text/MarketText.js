import React, { useState, useRef, useEffect } from 'react';
import styles from './MarketText.module.scss';
import { CurrencyText } from 'redux/component';
import { Highlight } from 'redux/hooks';

const MarketText = (props) => {
  const { name, price } = props
  const Previous = (value) => {
    const ref = useRef()
    useEffect(() => {
      ref.current = value
    })
    return ref.current ? ref.current : price
  }
  const prevPrice = Previous(price)
  const [gap, setGap] = useState(price - prevPrice)
  const plus = Highlight({ effect: (price, prevPrice), condition: gap > 0, timeout: 1500 })
  const minus = Highlight({ effect: (price, prevPrice), condition: gap < 0, timeout: 1500 })
  useEffect(() => {
    setGap(price - prevPrice)
  }, [price, prevPrice])
  return (
    <div className={`${styles.market__text} ${plus && styles.market_plue} ${minus && styles.market_minus}`}>
      <p>{name}</p>
      <p><CurrencyText price={price} /></p>
    </div>
  )
}

export default MarketText;