import React from 'react';
import styles from './List.module.scss';
import { Scrollbars } from 'react-custom-scrollbars';
import { SummaryText, SummaryTaxText } from 'redux/component';

const List = (props) => {
  const {
    cart,
    cartTotal,
    setCount,
    setRemoveCart
  } = props
  const tax = Object.keys(cartTotal)
  return (
    <Scrollbars style={{ width: '100%', height: '100%' }}>
      <div className={`${styles.list__hover}`}>
        {cart.map((m, i) =>
          <Cover key={i} data={m} setCount={setCount} setRemoveCart={setRemoveCart} />
        )}
        {tax.map((m, i) => <Cover key={i} tax={true} data={{ name: m, price: i > 0 ? Object.values(cartTotal).reduce((a, b) => a + b, 0) : cartTotal[m] }} />)}
      </div>
    </Scrollbars>
  )
}

const Cover = (props) => {
  const {
    style,
    data,
    tax,
    setCount,
    setRemoveCart
  } = props
  return (
    <div className={`${style ? styles.item__eo : styles.item__basic}`}>
      {tax ? <SummaryTaxText data={data} /> : <SummaryText data={data} setCount={setCount} setRemoveCart={setRemoveCart} />}
    </div>
  )
}

export default List;