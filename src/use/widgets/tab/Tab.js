import React, { useState } from 'react';
import styles from './Tab.module.scss';

//  <Tab
//    list={['tab1', 'tab2', 'tab3', 'tab4']}
//    components={[<div />, <div />, <div />, <div />]}
//  />

const Tab = (props) => {
  const {
    list,
    split,
    components,
    top
  } = props
  const [view, setView] = useState(0)

  return (
    <>
      <div className={styles.tab__content}>
        {components.map((m, i) => {
          return (
            <div key={i} className={`${styles.tab__content__item} ${top && styles.tab__content__top} ${(view < split ? 0 : 1) === i && styles.tab__content__selected}`}>
              {m}
            </div>
          )
        })}
      </div>
      <div className={styles.tab__list}>
        {list.map((m, i) => {
          return (
            <div key={i} className={`${top ? styles.tab__item__top : styles.tab__item__bottom} ${view === i && styles.item__selected}`} onClick={() => { setView(i) }}>{m}</div>
          )
        })}
      </div>
    </>
  )
}

export default Tab;