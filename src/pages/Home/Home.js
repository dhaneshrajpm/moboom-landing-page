import React, { useEffect } from 'react';

import styles from './Home.module.scss';
import ProductCard from '../../components/ProductCard/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from './HomeSlice';
import Navigation from '../../components/Navigation/Navigation';

const product = {
  "id": 1,
  "title": "iPhone 9",
  "description": "An apple mobile which is nothing like apple",
  "price": 549,
  "discountPercentage": 12.96,
  "rating": 2.69,
  "stock": 94,
  "brand": "Apple",
  "category": "smartphones",
  "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
  "images": [
    "https://i.dummyjson.com/data/products/1/1.jpg",
    "https://i.dummyjson.com/data/products/1/2.jpg",
    "https://i.dummyjson.com/data/products/1/3.jpg",
    "https://i.dummyjson.com/data/products/1/4.jpg",
    "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
  ]
}

const Home = () => {
  const dispatach = useDispatch();
  const products = useSelector(state => state.home.products);

  useEffect(() => {
    dispatach(fetchProduct());
  }, [])

  return (
    <div className={styles.container}>
      <Navigation />
      <div className={styles.dashboardCard}>
        <h3>Lorem Ipsum</h3>
        <p>Slash Sales begins in June. Get up to 80% Discount on all products <strong>Read More</strong></p>
      </div>
      <div className={styles.productContainer}>
        {products.map(product => (<ProductCard key={product.id} {...product} />))}
      </div>
    </div>
  )
}

export default Home