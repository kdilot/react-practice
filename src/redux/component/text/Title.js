import React from 'react';
import styles from './Title.module.scss';

const Title = (props) => {
  const { value } = props
  return (
    <div className={styles.text__title}>
      {value}
    </div>
  );
};

export default Title;