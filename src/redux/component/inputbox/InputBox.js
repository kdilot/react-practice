import React from 'react';
import styles from './InputBox.module.scss';

const InputBox = (props) => {
  const {
    round,
    number,
    max,
    min,
    maxLength,
    onBlur,
    onKeyDown
  } = props
  return (
    <input
      type={number && 'number'}
      max={max}
      min={min}
      maxLength={maxLength}
      onBlur={onBlur}
      onKeyDown={onKeyDown}
      className={`${styles.input__box} ${round && styles.input__round}`}
    />
  )
}

export default InputBox;