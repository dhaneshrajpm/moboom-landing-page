import React, { useCallback, useState } from 'react'
import { Rate } from 'antd';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

import styles from './ProductCard.module.scss';

const ProductCard = ({ title, thumbnail, price, rating, description }) => {
  const [fav, setFav] = useState(false);

  const onClick = useCallback(() => {
    setFav(!fav)
  }, [fav, setFav]);

  return (
    <div className={styles.container}>
      <img className={styles.image} src={thumbnail} alt='OOPS!, failed to fetch' />
      <span role='button' onClick={onClick} className={styles.favItem}>{fav ? <AiFillHeart className={styles.fillHeart} /> : < AiOutlineHeart className={styles.outlineHeart} />}</span>
      <div className={styles.productDetails}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>Product description: {description}</p>
        <h1 className={styles.price}>${price}</h1>
        <Rate className={styles.ratings} disabled defaultValue={rating} />
      </div>
    </div>
  )
}

export default ProductCard;