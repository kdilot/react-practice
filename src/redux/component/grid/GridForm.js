import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { GridText } from 'redux/component';
import styles from './GridForm.module.scss';

const GridForm = (props) => {
  const empty = new Array(24).fill(0)
  const { colums, gap, productList, setCartList } = props
  return (
    <Scrollbars style={{ width: '100%', height: '100%' }}>
      <div className={styles.grid__form} style={{ gridTemplateColumns: `repeat(${colums ? colums : 6}, minmax(8rem, 1fr)`, gridGap: gap ? gap : '1em' }}>
        {productList.map((m, i) => <div key={i} className={`${styles.grid__list}`} onClick={() => { setCartList(m) }}><GridText title={m.name} price={m.price} /></div>)}
        {productList.length === 0 && empty.map((m, i) => <div key={i} className={`${styles.grid__list} ${styles.grid__none}`}></div>)}
      </div>
    </Scrollbars>
  )
}

export default GridForm;