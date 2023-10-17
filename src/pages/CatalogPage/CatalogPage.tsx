import { useEffect } from 'react';
import { FilterPanel } from '../../components/FilterPanel/FilterPanel';
import { ProductsList } from '../../components/ProductsList/ProductsList';
import { Loader } from '../../components/UI/Loader/Loader';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchProducts } from '../../store/reducers/actionCreators';
import { QuerySortOptionType, QuerySortOrderType, catalogSlice } from '../../store/reducers/catalogSlice';
import { useDebounce } from '../../hooks/useDebounce';
import styles from './CatalogPage.module.scss';

export const CatalogPage = () => {
  const dispatch = useAppDispatch();
  const {
    products,
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
    setQueryString, setQuerySortOption, setQuerySortOrder,
    setLimit,
    setCurrentPageNumber,
  } = catalogSlice.actions;

  const search = () => {
    dispatch(fetchProducts(
      limit,
      (currentPageNumber - 1) * limit,
      queryString,
      querySortOption,
      querySortOrder,
    ));
  };
  const debauncedSearch = useDebounce(search, 500);
  useEffect(() => {
    debauncedSearch();
  }, [queryString]);

  useEffect(() => {
    dispatch(fetchProducts(
      limit,
      (currentPageNumber - 1) * limit,
      queryString,
      querySortOption,
      querySortOrder,
    ));
  }, [querySortOption, querySortOrder]);

  useEffect(() => {
    dispatch(fetchProducts(
      limit,
      (currentPageNumber - 1) * limit,
      queryString,
      querySortOption,
      querySortOrder,
    ));
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
            products={products}
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
