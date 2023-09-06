import React, { useCallback, useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import cx from 'classnames';

import styles from './Header.module.scss';
import Navigation from '../../components/Navigation/Navigation'
import { Drawer } from 'antd';
import { LINKS } from '../../components/Navigation/Navigation.contant';

const Header = () => {
  const [open, setOpen] = useState(false);

  const onClick = useCallback(() => {
    setOpen(!open);
  }, [setOpen, open]);

  return (
    <>
      <div className={styles.container} hidden>
        <AiOutlineMenu className={styles.menu} onClick={onClick} />
        <h1><span className={styles.pink}>M</span>oBoo<span className={styles.pink}>M</span></h1>
      </div>
      <Drawer
        title="Welcome to Moboom"
        placement='left'
        closable={false}
        width={'25rem'}
        open={open}
        className={styles.drawer}
      >
        {LINKS.map((link, index) => {
          return (
            <div role='button' tabIndex={index} key={link.label} className={cx(link.url === '/basket' ? styles.active : styles.link)} onClick={onClick}>
              {link.label}
            </div>
          )
        })}
      </Drawer>
      <Navigation />
    </>
  )
}

export default Header