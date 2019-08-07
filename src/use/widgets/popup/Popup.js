import React from 'react';
import styles from './Popup.module.scss';

const Popup = ({ children, effects }) => {
  return (
    <>
      <div className={`${styles.wrapper} ${styles[effects]}`}>
        <div className={`${styles.popup} ${styles[effects]}`}>
          {children}
        </div>
      </div>
    </>
  );
};

export default Popup;