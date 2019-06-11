import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { MarketText } from 'redux/component';
import styles from './MarketGrid.module.scss';

const MarketGrid = (props) => {
  const { marketList } = props
  return (
    <Scrollbars style={{ width: '100%', height: '100%' }}>
      <div className={styles.market__grid}>
        {marketList.map((m, i) => <MarketText key={i} name={m.name} price={m.price} />)}
      </div>
    </Scrollbars>
  )
}

export default MarketGrid;