import { useMemo } from 'react';
import { QuerySortOptionType, QuerySortOrderType } from '../../store/reducers/catalogSlice';
import { SearchInput } from '../UI/inputs/SearchInput/SearchInput';
import { Select, SelectItem } from '../UI/Select/Select';
import { SelectChangeEvent } from '@mui/material';
import styles from './FilterPanel.module.scss';

interface FilterPanelProps {
  searchValue: string;
  onSearchValueChange: (value: string) => void;

  sortOption: QuerySortOptionType;
  onSortOptionChange: (value: QuerySortOptionType) => void;

  sortOrder: QuerySortOrderType;
  onSortOrderChange: (value: QuerySortOrderType) => void;
}

export const FilterPanel = (props: FilterPanelProps) => {
  const {
    searchValue, onSearchValueChange,
    sortOption, onSortOptionChange,
    sortOrder, onSortOrderChange,
  } = props;

  const sortOptionSelectItems: SelectItem[] = useMemo(() => {
    return [
      { name: 'ID', value: 'id' },
      { name: 'Name', value: 'name' },
      { name: 'Date of creation', value: 'createdAt' },
    ]
  }, []);
  const onChangeSortOptionSelectValue = (event: SelectChangeEvent<unknown>) => {
    onSortOptionChange(event.target.value as QuerySortOptionType);
  }

  const sortOrderSelectItems: SelectItem[] = useMemo(() => {
    return [
      { name: 'ASC', value: 'asc' }, 
      { name: 'DESC', value: 'desc' }
    ]
  }, []);
  const onChangeSortOrderSelectValue = (event: SelectChangeEvent<unknown>) => {
    onSortOrderChange(event.target.value as QuerySortOrderType);
  }

  return (
    <div className={styles['filter-panel']}>
      <SearchInput searchValue={searchValue} onSearchValueChange={onSearchValueChange} />
      <div className={styles['order-panel']}>
        <span className={styles['order-item']}>
          order by
          <Select
            value={sortOption}
            onChange={onChangeSortOptionSelectValue}
            selectItems={sortOptionSelectItems}
          />
        </span>
        <span className={styles['order-item']}>
          order by
          <Select
            value={sortOrder}
            onChange={onChangeSortOrderSelectValue}
            selectItems={sortOrderSelectItems}
          />
        </span>
      </div>
    </div>
  );
};
