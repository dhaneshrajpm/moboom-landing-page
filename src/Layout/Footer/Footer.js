import React from 'react'
import { Col, Input, Row } from 'antd';
import { AiFillTwitterCircle, AiFillInstagram, AiFillAndroid, AiFillApple } from 'react-icons/ai';
import { FaFacebook, FaTiktok, FaSnapchat } from 'react-icons/fa';

import styles from './Footer.module.scss';
import CardImg from '../../assets/cards.png';
import { COMPANY_INFO, CUSTOMER_CARE, HELP_AND_SUPPORT } from './Footer.contant';
import FooterLabels from '../../components/FooterLabels/FooterLabels';
import Email from '../../components/Email/Email';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.infoHelpCare}>
          <FooterLabels name={COMPANY_INFO.name} labels={COMPANY_INFO.lables} />
          <FooterLabels name={HELP_AND_SUPPORT.name} labels={HELP_AND_SUPPORT.lables} />
          <FooterLabels name={CUSTOMER_CARE.name} labels={CUSTOMER_CARE.lables} />
        </div>
        <div>
          <p>&#169;2010-2020 All Rights Rerserved</p>
          <p><a href='#!'>Privacy Center</a> | <a href='#!'>Privacy & Cookie Policy</a> | <a href='#!'>Manage Cookie</a></p>
          <p><a href='#!'>Terms & Conditions</a> | <a href='#!'>Copyright Notice</a> | <a href='#!'>Imprint</a></p>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.socialPlatform}>
          <div>
            <h3>SOCIALS</h3>
            <span className={styles.logo}><FaFacebook /></span>
            <span className={styles.logo}><AiFillTwitterCircle /></span>
            <span className={styles.logo}><AiFillInstagram /></span>
            <span className={styles.logo}><FaTiktok /></span>
            <span className={styles.logo}><FaSnapchat /></span>
          </div>
          <div>
            <h3>PLATFORM</h3>
            <span className={styles.logo}><AiFillAndroid /></span>
            <span className={styles.logo}><AiFillApple /></span>
          </div>
        </div>
        <Email />
        <div className={styles.acceptCards}>
          <h3>WE ACCEPT</h3>
          <img src={CardImg} alt='Cards' />
        </div>
      </div>
    </div>
  )
}

export default Footer;
