import React, { useState } from 'react';
import styles from './Popup.module.scss';

const Popup = ({ children, effects }) => {
  const [test, setTest] = useState(true)
  return (
    <>
      {test &&
        <div className={`${styles.wrapper} ${styles[effects]}`}>
          <div className={`${styles.popup} ${styles[effects]}`}>
            <button onClick={() => { setTest(!test) }}>asdfasd</button>
            {children}
            {test ? 1 : 0}
          </div>
        </div>
      }
    </>
  );
};

export default Popup;