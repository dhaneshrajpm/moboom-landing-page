import React, { useEffect } from 'react';

import styles from './Home.module.scss';
import ProductCard from '../../components/ProductCard/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from './HomeSlice';
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../Layout/Footer/Footer';

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
      <Footer />
    </div>
  )
}

export default Home