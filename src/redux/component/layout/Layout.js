import React from 'react';
import styles from './Layout.module.scss';

const Layout = (props) => {
  const { child } = props
  return (
    <div className={styles.layout__grid}>
      <div className={styles.layout__child}>{child[0]}</div>
      <div className={styles.layout__child}>{child[1]}</div>
      <div className={styles.layout__child}>{child[2]}</div>
      <div className={styles.layout__child}>{child[3]}</div>
    </div>
  );
};

export default Layout;