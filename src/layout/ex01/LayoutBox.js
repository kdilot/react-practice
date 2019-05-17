import React from 'react';
import { Col } from 'antd';
import styles from './Info.module.scss';
import Button from './Button';

const LayoutBox = ({ bg = 'white', round = false }) => {
  return (
    <Col span={6} className={styles.hover}>
      <div className={styles.box} style={{ backgroundColor: bg, borderRadius: round }}>asdf</div>
      <Button title={'Test Button'} size={'lg'} round={true} event={() => { console.log('test') }} />
    </Col>
  )
}

export default LayoutBox;