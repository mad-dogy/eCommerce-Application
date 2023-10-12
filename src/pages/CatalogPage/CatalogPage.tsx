import { useEffect, useState } from 'react';
import { FilterPanel } from '../../components/FilterPanel/FilterPanel';
import { ProductsList } from '../../components/ProductsList/ProductsList';
import { Loader } from '../../components/UI/Loader/Loader';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchProducts, fetchSortProducts } from '../../store/reducers/actionCreators';
import { catalogSlice } from '../../store/reducers/catalogSlice';
import styles from './CatalogPage.module.scss';

export const CatalogPage = () => {
  const dispatch = useAppDispatch();
  const {
    searchedProducts, isLoading, error,
  } = useAppSelector(state => state.catalogReducer);
  const { searchProducts } = catalogSlice.actions;

  const [search, setSearch] = useState({ query: '' });
  const [sort, setSort] = useState({ option: 'id', order: 'ASC' });

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  useEffect(() => {
    dispatch(searchProducts(search.query));
  }, [search.query]);

  useEffect(() => {
    const dispatchSortProducts = async () => {
      await dispatch(fetchSortProducts(sort.option, sort.order));
    };
    dispatchSortProducts().finally(() => dispatch(searchProducts(search.query)));
  }, [sort.option, sort.order]);

  return (
    <div className={styles.catalog}>
      <FilterPanel
        search={search}
        setSearch={setSearch}
        sort={sort}
        setSort={setSort}
      />
      {error ?? <div>{error}</div>}
      {isLoading
        ? <Loader />
        : <ProductsList productsInfo={searchedProducts} />}
    </div>
  );
};
