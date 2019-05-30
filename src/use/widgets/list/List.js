import React from 'react';
import styles from './List.module.scss';
import { Scrollbars } from 'react-custom-scrollbars';

const List = (props) => {
  return (
    <Scrollbars style={{ width: '100%', height: '100%' }}>
      <div className={`${styles.list__hover}`}>
        <Cover data={'data'} />
      </div>
    </Scrollbars>
  )
}

const Cover = (props) => {
  const { style, data } = props
  return (
    <div className={`${styles.list__item} ${style ? styles.item__eo : styles.item__basic}`}>
      {data}
    </div>
  )
}

export default List;