import React from 'react';
import st from './Button.module.scss';

//  size : [sm, md, lg]
//  ex) btn_lg

const Button = ({ title='btn', size, round = false, event }) => {
  return (
    <>
      <button className={st.btn__sm} onClick={event}>
        {title}
      </button>
      <button className={st.btn__md} onClick={event}>
        {title}
      </button>
      <button className={st.btn__lg} onClick={event}>
        {title}
      </button>
      <button className={`${size === 'lg' ? st.btn__lg : size === 'sm' ? st.btn__sm : st.btn__md} ${round ? st.btn__rd : ''}`} onClick={event}>
        {title}
      </button>
    </>
  )
}

export default Button;