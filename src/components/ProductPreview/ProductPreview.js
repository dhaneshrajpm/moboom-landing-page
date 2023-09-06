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
  const { products, total } = productsList;

  const onChange = useCallback((page) => {
    setPage(page)
    dispatach(fetchProduct((page - 1) * 12))
  }, [dispatach, setPage]);

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