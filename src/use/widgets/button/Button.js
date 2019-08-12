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
  size = 'medium',
  styleName,
}) => {
  return (
    <>
      <button
        className={` ${styles.btn} ${size ? styles[size] : ''} ${full ? styles.full : ''} ${styles[styleName]} `}
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