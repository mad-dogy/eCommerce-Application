import { useEffect, useState } from 'react';
import { FilterPanel } from '../../components/FilterPanel/FilterPanel';
import { ProductsList } from '../../components/ProductsList/ProductsList';
import { Loader } from '../../components/UI/Loader/Loader';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchProducts, fetchSortProducts } from '../../store/reducers/actionCreators';
import { QuerySortOptionType, QuerySortOrderType, catalogSlice } from '../../store/reducers/catalogSlice';
import styles from './CatalogPage.module.scss';

export const CatalogPage = () => {
  const dispatch = useAppDispatch();
  const {
    searchedProducts,
    total,
    limit,
    queryString,
    querySortOption,
    querySortOrder,
    isLoading,
    error,
  } = useAppSelector(state => state.catalogReducer);
  const {
    searchProducts, setQueryString, setQuerySortOption, setQuerySortOrder, setLimit,
  } = catalogSlice.actions;

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  useEffect(() => {
    dispatch(searchProducts(queryString));
  }, [queryString]);

  useEffect(() => {
    const dispatchSortProducts = async () => {
      await dispatch(fetchSortProducts(querySortOption, querySortOrder));
    };
    dispatchSortProducts().finally(() => dispatch(searchProducts(queryString)));
  }, [querySortOption, querySortOrder]);

  const onQueryStringChange = (value: string) => {
    dispatch(setQueryString(value));
  };
  const onQuerySortOptionChange = (value: QuerySortOptionType) => {
    dispatch(setQuerySortOption(value));
  };
  const onQuerySortOrderChange = (value: QuerySortOrderType) => {
    dispatch(setQuerySortOrder(value));
  };

  return (
    <div className={styles.catalog}>
      <FilterPanel
        searchValue={queryString}
        onSearchValueChange={onQueryStringChange}
        sortOption={querySortOption}
        onSortOptionChange={onQuerySortOptionChange}
        sortOrder={querySortOrder}
        onSortOrderChange={onQuerySortOrderChange}
      />
      {error ?? <div>{error}</div>}
      {isLoading
        ? <Loader />
        : (
          <ProductsList
            products={searchedProducts}
            pagesCount={Math.ceil(total / 20)}
          />
        )}
    </div>
  );
};
