import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Pagination } from 'antd';

import styles from './ProductPreview.module.scss';
import ProductCard from '../ProductCard/ProductCard';
import { fetchProduct } from '../../pages/Home/HomeSlice';
import { isEmpty } from 'lodash';

const ProductPreview = () => {
  const { productsList } = useSelector(state => state.home);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isEmpty(productsList)) {
      dispatch(fetchProduct());
    }
  }, [productsList, dispatch])

  const [page, setPage] = useState(1);
  const { products, total } = productsList;

  const onChange = useCallback((page) => {
    setPage(page)
    dispatch(fetchProduct((page - 1) * 12))
  }, [dispatch, setPage]);

  return (
    <div className={styles.container}>
      <div className={styles.productContainer}>
        {products?.map(product => (<ProductCard key={product.id} {...product} />))}
      </div>
      <div className={styles.pagination}>
        <Pagination
          total={total}
          pageSize={12}
          defaultCurrent={page}
          current={page}
          onChange={onChange}
          showSizeChanger={false}
          showLessItems
        />
      </div>
    </div>
  )
}

export default ProductPreview