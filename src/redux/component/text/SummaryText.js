import React, { useState } from 'react';
import styles from './SummaryText.module.scss';
import { Button, CurrencyText, InputBox } from 'redux/component';

const SummaryText = (props) => {
  const {
    data,
    setCount,
    setRemoveCart
  } = props
  const [modify, setModify] = useState(false)
  const [fade, setFade] = useState(1)
  const setHighlight = async (type) => {
    await setFade(type)
    if (type === 1) {
      await setModify(false)
    } else if (type === 2) {
      await setTimeout(() => {
        setRemoveCart(data.name)
        setFade(0)
      }, 1000)
    } else if (type === 'esc') {
      await setModify(false)
    }
  }
  return (
    <div className={`${styles.item__form} ${fade === 1 && styles.item__in} ${fade === 2 && styles.item__out}`}>
      <p>{data.name}</p>
      <p onClick={() => { setModify(true) }} onMouseLeave={() => { setModify(false) }}>{modify ? <InputBox number={true} round={true} max={99} onKeyDown={(e) => { setCount(data.name, e, setHighlight) }} /> : 'x ' + data.count}</p>
      <p><CurrencyText price={data.count * data.price} /></p>
      <p><Button border={'1px solid white'} size={'sm'} title={'X'} fontWeight={'bold'} onClick={() => { setHighlight(2) }} /></p>
    </div>
  )
}

const SummaryTaxText = (props) => {
  const { data } = props
  return (
    <div className={styles.tax__form}>
      <p>{data.name}</p>
      <p><CurrencyText price={data.price} /></p>
    </div>
  )
}

export {
  SummaryText,
  SummaryTaxText
}