import React, { useCallback, useEffect, useState } from 'react';

import styles from './Home.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories, searchByCategory } from './HomeSlice';
import Footer from '../../Layout/Footer/Footer';
import { Select } from 'antd';
import { capitalize, isEmpty } from 'lodash';
import ProductPreview from '../../components/ProductPreview/ProductPreview';
import Header from '../../Layout/Header/Header';

const Home = () => {
  const { categories } = useSelector(state => state.home);
  const dispatach = useDispatch();
  useEffect(() => {
    if (isEmpty(categories)) {
      dispatach(fetchCategories());
    }
  }, [categories, dispatach])


  const formetedCategories = () => {
    return (categories || []).map((category) => ({
      value: category,
      label: capitalize(category)
    }));
  }

  const [selectedCategory, setSelectedCategory] = useState();

  const onSelectCategory = useCallback((value) => {
    setSelectedCategory(value);
    dispatach(searchByCategory(value))
  }, [setSelectedCategory, dispatach]);

  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.dashboardCard}>
          <h3>Lorem Ipsum</h3>
          <p>Slash Sales begins in June. Get up to 80% Discount on all products <strong>Read More</strong></p>
        </div>
        <div className={styles.categorySelect}>
          <span className={styles.categorySelectLabel}>Select Category</span>
          <Select placeholder='Select Category' options={[...formetedCategories()]} value={selectedCategory} onChange={onSelectCategory} />
        </div>
      </div>
      <ProductPreview />
      <Footer />
    </>
  )
}

export default Home