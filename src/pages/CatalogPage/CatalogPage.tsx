import { useEffect, useState } from 'react';
import { FilterPanel } from '../../components/FilterPanel/FilterPanel';
import { ProductsList } from '../../components/ProductsList/ProductsList';
import { Loader } from '../../components/UI/Loader/Loader';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchProducts } from '../../store/reducers/actionCreators';
import { catalogSlice } from '../../store/reducers/catalogSlice';
import styles from './CatalogPage.module.scss';

export const CatalogPage = () => {
  const dispatch = useAppDispatch();
  const {
    products, searchedProducts, isLoading, error,
  } = useAppSelector(state => state.catalogReducer);
  const { searchProducts } = catalogSlice.actions;

  const [search, setSearch] = useState({ query: '' });
  console.log(search.query);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  useEffect(() => {
    dispatch(searchProducts(search.query));
  }, [search.query]);

  return (
    <div className={styles.catalog}>
      <FilterPanel search={search} setSearch={setSearch} />
      {error ?? <div>{error}</div>}
      {isLoading
        ? <Loader />
        : <ProductsList productsInfo={searchedProducts} />}
    </div>
  );
};
