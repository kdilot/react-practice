import React from 'react';
import styles from './GridForm.module.scss';
import { Scrollbars } from 'react-custom-scrollbars';

const GridForm = (props) => {
  const { colums, gap } = props
  return (
    <Scrollbars style={{ width: '100%', height: '100%' }}>
      <div className={styles.grid__form} style={{ gridTemplateColumns: `repeat(${colums ? colums : 6}, minmax(8rem, 1fr)`, gridGap: gap ? gap : '1em' }}>
        <div className={styles.grid__list}>1</div>
        <div className={styles.grid__list}>1</div>
        <div className={styles.grid__list}>1</div>
        <div className={styles.grid__list}>1</div>
        <div className={styles.grid__list}>1</div>
        <div className={styles.grid__list}>1</div>
        <div className={styles.grid__list}>1</div>
        <div className={styles.grid__list}>1</div>
        <div className={styles.grid__list}>1</div>
        <div className={styles.grid__list}>1</div>
        <div className={styles.grid__list}>1</div>
      </div>
    </Scrollbars>
  )
}

export default GridForm;