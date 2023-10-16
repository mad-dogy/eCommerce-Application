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
    pagesAmount,
    currentPageNumber,
    queryString,
    querySortOption,
    querySortOrder,
    isLoading,
    error,
  } = useAppSelector(state => state.catalogReducer);
  const {
    searchProducts,
    setQueryString, setQuerySortOption, setQuerySortOrder,
    setLimit,
    setCurrentPageNumber,
  } = catalogSlice.actions;

  useEffect(() => {
    dispatch(searchProducts(queryString));
  }, [queryString]);

  useEffect(() => {
    const dispatchSortProducts = async () => {
      await dispatch(fetchSortProducts(limit, (currentPageNumber-1)*limit, querySortOption, querySortOrder));
    };
    dispatchSortProducts().finally(() => dispatch(searchProducts(queryString)));
  }, [querySortOption, querySortOrder]);

  useEffect(() => {
    dispatch(fetchSortProducts(limit, (currentPageNumber-1)*limit, querySortOption, querySortOrder));
  }, [limit, currentPageNumber]);

  const onQueryStringChange = (value: string) => {
    dispatch(setQueryString(value));
  };
  const onQuerySortOptionChange = (value: QuerySortOptionType) => {
    dispatch(setQuerySortOption(value));
  };
  const onQuerySortOrderChange = (value: QuerySortOrderType) => {
    dispatch(setQuerySortOrder(value));
  };
  const onLimitChange = (value: number) => {
    dispatch(setLimit(value));
    dispatch(setCurrentPageNumber(1));
  };
  const onCurrentPageNumberChange = (event: React.ChangeEvent<unknown>, value: number) => {
    dispatch(setCurrentPageNumber(value));
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
            pagesCount={pagesAmount}
            currentPage={currentPageNumber}
            handleChangePage={onCurrentPageNumberChange}
            productsLimit={limit}
            onChangeProductsLimit={onLimitChange}
          />
        )}
    </div>
  );
};
