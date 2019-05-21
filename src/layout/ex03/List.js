import React from 'react';
import styles from './List.module.scss';
import { Scrollbars } from 'react-custom-scrollbars';
import ItemForm from './ItemForm';

const List = ({ basic = true }) => {
  return (
    <Scrollbars style={{ width: '100vw', height: '100%' }}>
      <div className={styles.list__hover}>
        <Item basic={basic} />
        <Item basic={basic} />
        <Item basic={basic} />
        <Item basic={basic} />
        <Item basic={basic} />
        <Item basic={basic} />
        <Item basic={basic} />
        <Item basic={basic} />
        <Item basic={basic} />
        <Item basic={basic} />
        <Item basic={basic} />
        <Item basic={basic} />
        <Item basic={basic} />
        <Item basic={basic} />
        <Item basic={basic} />
        <Item basic={basic} />
        <Item basic={basic} />
        <Item basic={basic} />
        <Item basic={basic} />
        <Item basic={basic} />
        <Item basic={basic} />
        <Item basic={basic} />
        <Item basic={basic} />
        <Item basic={basic} />
        <Item basic={basic} />
        <Item basic={basic} />
        <Item basic={basic} />
        <Item basic={basic} />
        <Item basic={basic} />
      </div>
    </Scrollbars>
  )
}

const Item = ({ basic, data = 'sample X4 500' }) => {
  return (
    <div className={`${styles.list__item} ${basic ? styles.item__basic : styles.item__eo}`}>
      <ItemForm data={data} />
    </div>
  )
}

export default List;