import React, { useState } from 'react';
import styles from './Popup.module.scss';

const Popup = ({ children, effects, button = 'Button' }) => {
  const [display, setDisplay] = useState(null)
  return (
    <>
      <div className={styles.popupButton} onClick={() => { setDisplay('on') }}>{button}</div>
      <div className={`${styles.wrapper} ${styles[effects]} ${display === 'on' && styles.on} ${display === 'off' && styles.off}`}>
        <div className={styles.popupButton} onClick={() => { setDisplay('off') }}>{button}</div>
        <div className={`${styles.popup} ${styles[effects]} ${display === 'on' && styles.on} ${display === 'off' && styles.off}`}>
          {children}
        </div>
      </div>
    </>
  );
};

export default Popup;