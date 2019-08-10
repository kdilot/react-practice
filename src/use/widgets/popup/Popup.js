import React, { useState, useEffect } from 'react';
import styles from './Popup.module.scss';

const Popup = ({ children, effects = 'left', button = 'Button' }) => {
  const [display, setDisplay] = useState(null)
  const keyESC = event => {
    if (event.key === 'Escape') setDisplay('off')
  }
  useEffect(() => {
    window.addEventListener('keydown', keyESC)
  }, [])
  return (
    <>
      <div onClick={() => { setDisplay('on') }}>{button}</div>
      <div className={`${styles.wrapper} ${styles[effects]} ${display === 'on' && styles.on} ${display === 'off' && styles.off}`}>
        <div className={styles.popupButton} onClick={() => { setDisplay('off') }}>Press the ESC or click to close</div>
        <div className={`${styles.popup} ${styles[effects]} ${display === 'on' && styles.on} ${display === 'off' && styles.off}`}>
          {children}
        </div>
      </div>
    </>
  );
};

export default Popup;