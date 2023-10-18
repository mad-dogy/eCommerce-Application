import { FilterPanel } from '../../components/FilterPanel/FilterPanel';
import { ProductsList } from '../../components/ProductsList/ProductsList';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { QuerySortOptionType, QuerySortOrderType, catalogSlice } from '../../store/reducers/catalogSlice';
import styles from './CatalogPage.module.scss';

const {
  setQueryString,
  setQuerySortOption,
  setQuerySortOrder,
} = catalogSlice.actions;

export const CatalogPage = () => {
  const dispatch = useAppDispatch();
  const {
    queryString,
    querySortOption,
    querySortOrder,
  } = useAppSelector(state => state.catalogReducer);

  const onQuerySortOrderChange = (value: QuerySortOrderType) => {
    dispatch(setQuerySortOrder(value));
  };
  const onQueryStringChange = (value: string) => {
    dispatch(setQueryString(value));
  };
  const onQuerySortOptionChange = (value: QuerySortOptionType) => {
    dispatch(setQuerySortOption(value));
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
      <ProductsList />
    </div>
  );
};
