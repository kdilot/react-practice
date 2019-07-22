import React from 'react';
import styles from './Button.module.scss';

const Button = ({
  background,
  border,
  children = 'btn',
  fontSize,
  fontWeight,
  full = false,
  margin,
  onClick,
  padding,
  radius,
  size = 'md',
  styleName,
}) => {
  return (
    <>
      <button
        className={` ${styles.btn} ${size === 'lg' ? styles.btn__lg : size === 'sm' ? styles.btn__sm : styles.btn__md} ${full && styles.btn__full} ${styles[`btn__${styleName}`]} `}
        style={{
          background: background,
          border: border,
          borderRadius: radius,
          fontSize: fontSize,
          fontWeight: fontWeight,
          margin: margin,
          padding: padding,
        }}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  )
}

export default Button;