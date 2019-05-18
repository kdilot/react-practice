import React from 'react';
import styles from './GridForm.module.scss';
import { Scrollbars } from 'react-custom-scrollbars';
import ProductFrom from './ProductForm';

const GridForm = ({ colums = '6', gap = '1em' }) => {
  return (
    <Scrollbars style={{ width: '100vw', height: '100%' }}>
      <div className={styles.grid__form} style={{ gridTemplateColumns: `repeat(${colums}, minmax(8rem, 1fr)`, gridGap: gap }}>
        <div className={styles.grid__list}><ProductFrom /></div>
        <div className={styles.grid__list}><ProductFrom /></div>
        <div className={styles.grid__list}><ProductFrom /></div>
        <div className={styles.grid__list}><ProductFrom /></div>
        <div className={styles.grid__list}><ProductFrom /></div>
        <div className={styles.grid__list}><ProductFrom /></div>
        <div className={styles.grid__list}><ProductFrom /></div>
        <div className={styles.grid__list}><ProductFrom /></div>
        <div className={styles.grid__list}><ProductFrom /></div>
        <div className={styles.grid__list}><ProductFrom /></div>
        <div className={styles.grid__list}><ProductFrom /></div>
      </div>
    </Scrollbars>
  )
}

export default GridForm;