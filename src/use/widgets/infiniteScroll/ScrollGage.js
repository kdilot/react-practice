import React from 'react';
import styles from './ScrollGage.module.scss';

const ScrollGage = ({ percentage }) => {
  return (
    <div className={styles.wrapper} style={{ width: `${percentage}%` }} />
  );
};

export default ScrollGage;