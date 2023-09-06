import React, { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import { debounce } from 'lodash';
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { Input } from 'antd';
import { useDispatch } from 'react-redux';
import { BsBasket2 } from 'react-icons/bs';
import cx from 'classnames';

import styles from './Navigation.module.scss';
import { LINKS } from './Navigation.contant';
import { searchProduct } from '../../pages/Home/HomeSlice';


const Navigation = () => {
  const [active, setActive] = useState('/basket'); //eslint-disable-line
  const [searchText, setSearchText] = useState('');
  const dispatch = useDispatch();

  const searchDebonce = debounce((key) => {
    //TODO: declare search api
    dispatch(searchProduct(key));
  }, 3000)

  const onChange = useCallback((e) => {
    const { value } = e.target;
    setSearchText(value);
    searchDebonce(value);
  }, [searchDebonce, setSearchText]);

  const onClearClick = useCallback(() => {
    setSearchText('');
  }, [setSearchText]);

  return (
    <div className={styles.container}>
      <h1><span className={styles.pink}>M</span>oBoo<span className={styles.pink}>M</span></h1>
      <div className={styles.links}>
        <Input
          className={styles.searchBar}
          placeholder='What do you want to buy today?'
          value={searchText}
          onChange={onChange}
          // autoFocus
          suffix={searchText.length === 0 ? <AiOutlineSearch /> : <AiOutlineClose onClick={onClearClick} />}
        />
        {LINKS.map(link => <Link className={cx(active === link.url ? styles.active : styles.link)} key={link.label} to={link.url}>{link.label} {link.label === 'Basket' && <BsBasket2 />}</Link>)}
      </div>
    </div>
  )
}

export default Navigation