import React from 'react';
import styles from './Layout.module.scss';

const Layout = ({ child = [] }) => {
  return (
    <div className={styles.layout__grid}>
      <div>{child[0]}</div>
      <div>{child[1]}</div>
      <div>{child[2]}</div>
      <div>{child[3]}</div>
    </div>
  );
};

export default Layout;