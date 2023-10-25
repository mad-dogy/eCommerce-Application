import { FilterPanel } from '../../components/FilterPanel/FilterPanel';
import { ProductsList } from '../../components/ProductsList/ProductsList';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import {
  QuerySortOptionValueType,
  QuerySortOrderValueType,
  catalogSlice
} from '../../store/reducers/catalogSlice';
import {
  getCatalogQueryString,
  getCatalogSortOption,
  getCatalogSortOrder
} from '../../store/selectors/getCatalogFields/getCatalogFilterOptions';

import styles from './CatalogPage.module.scss';
import { sortOptionSelectItems, sortOrderSelectItems } from './constants';

const { setQueryString, setQuerySortOption, setQuerySortOrder } = catalogSlice.actions;

export const CatalogPage = () => {
  const dispatch = useAppDispatch();

  const queryString = useAppSelector(getCatalogQueryString);
  const querySortOption = useAppSelector(getCatalogSortOption);
  const querySortOrder = useAppSelector(getCatalogSortOrder);

  const onQuerySortOrderChange = (value: QuerySortOrderValueType) => {
    dispatch(setQuerySortOrder(value));
  };

  const onQueryStringChange = (value: string) => {
    dispatch(setQueryString(value));
  };

  const onQuerySortOptionChange = (value: QuerySortOptionValueType) => {
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
        sortOptionSelectItems={sortOptionSelectItems}
        sortOrderSelectItems={sortOrderSelectItems}
      />

      <ProductsList />
    </div>
  );
};
