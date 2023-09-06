import React, { useState } from 'react'

import styles from './Email.module.scss';
import { Button, Input } from 'antd';
import { isEmpty } from 'lodash';

const Email = () => {
  const [email, setEmail] = useState('');
  return (
    <div className={styles.container}>
      <h3>SIGN UP</h3>
      <div>
        <Input className={styles.email} type='email' placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <Button onClick={() => isEmpty(email) ? alert('Please enter your email') : alert(email)} >SUBSCRIBE</Button>
      </div>
      <span>By clicking the SUBSCRIBE button, you are agreeing to our <a href='#!'>Privacy & Cookie Policy</a></span>
    </div>
  )
}

export default Email