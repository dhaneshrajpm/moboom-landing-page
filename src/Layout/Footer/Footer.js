import React from 'react'

import styles from './Footer.module.scss';
import { Col, Row } from 'antd';

const Footer = () => {
  return (
    <div className={styles.container}>
      <Row>
        <Col span={12}>
          <div className=''>
          </div>
          <div>
            <p>&#169;2010-2020 All Rights Rerserved</p>
            <p><a href='_blank'>Privacy Center</a> | <a href='_blank'>Privacy & Cookie Policy</a> | <a href='_blank'>Manage Cookie</a></p>
            <p><a href='_blank'>Terms & Conditions</a> | <a href='_blank'>Copyright Notice</a> | <a href='_blank'>Imprint</a></p>
          </div>
        </Col>
        <Col span={12}>col-12</Col>
      </Row>
    </div>
  )
}

export default Footer