import React, { useCallback, useState } from 'react'

import styles from './ProductPreview.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../ProductCard/ProductCard';
import { Pagination } from 'antd';
import { fetchProduct } from '../../pages/Home/HomeSlice';

const ProductPreview = () => {
  const dispatach = useDispatch();

  const [page, setPage] = useState(1);
  const { productsList } = useSelector(state => state.home);
  const { products, total, skip, limit } = productsList;

  // console.log(products, total, skip, limit);

  const onChange = useCallback((page) => {
    setPage(page)
    const skipTo = (page - 1) * limit;
    if (skipTo < total) {
      dispatach(fetchProduct((page - 1) * limit))
    }
  }, [dispatach, limit, total]);

  return (
    <>
      <div className={styles.container}>
        {products?.map(product => (<ProductCard key={product.id} {...product} />))}
      </div>
      <div className={styles.pagination}>
        <Pagination total={total} defaultCurrent={page} current={page} onChange={onChange} showSizeChanger={false} showLessItems />
      </div>
    </>
  )
}

export default ProductPreview