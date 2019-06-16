import React from 'react';
import styles from './GridText.module.scss';
import { CurrencyText } from 'redux/component';

const GridText = (props) => {
  const { title, price } = props
  return (
    <div className={styles.itemText}>
      <h3>{title}</h3>
      <h4><CurrencyText price={price} /></h4>
    </div>
  )
}

export default GridText;