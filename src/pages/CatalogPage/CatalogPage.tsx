import { useEffect, useState } from 'react';
import { FilterPanel } from '../../components/FilterPanel/FilterPanel';
import { ProductsList } from '../../components/ProductsList/ProductsList';
import { Loader } from '../../components/UI/Loader/Loader';
import styles from './CatalogPage.module.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchProducts } from '../../store/reducers/actionCreators';

export const CatalogPage = () => {
  const dispatch = useAppDispatch();
  const { products, isLoading, error } = useAppSelector(state => state.catalogReducer);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className={styles.catalog}>
      <FilterPanel />
      {error ?? <div>{error}</div>}
      {isLoading
        ? <Loader />
        : <ProductsList productsInfo={products} />}
    </div>
  );
};
