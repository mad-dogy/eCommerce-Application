import { SelectChangeEvent } from '@mui/material';

import { SearchInput } from '../UI/inputs/SearchInput/SearchInput';
import { Select } from '../UI/Select/Select';

import styles from './FilterPanel.module.scss';

interface a {
  name: string;
  value: string;
}

interface FilterPanelProps {
  searchValue: string;
  onSearchValueChange: (value: string) => void;

  sortOption: string;
  onSortOptionChange: (value: string) => void;

  sortOrder: string;
  onSortOrderChange: (value: string) => void;

  sortOptionSelectItems: a[];
  sortOrderSelectItems: a[];
}

export const FilterPanel = (props: FilterPanelProps) => {
  const {
    searchValue,
    onSearchValueChange,
    sortOption,
    onSortOptionChange,
    sortOrder,
    onSortOrderChange,
    sortOptionSelectItems,
    sortOrderSelectItems
  } = props;

  const onChangeSortOptionSelectValue = (event: SelectChangeEvent) => {
    onSortOptionChange(event.target.value);
  };

  const onChangeSortOrderSelectValue = (event: SelectChangeEvent) => {
    onSortOrderChange(event.target.value);
  };

  return (
    <div className={styles['filter-panel']}>
      <SearchInput searchValue={searchValue} onSearchValueChange={onSearchValueChange} />

      <div className={styles['order-panel']}>
        <div className={styles['order-item']}>
          <span>order by</span>
          <Select
            value={sortOption}
            onChange={onChangeSortOptionSelectValue}
            selectItems={sortOptionSelectItems}
          />
        </div>

        <div className={styles['order-item']}>
          <span>order by</span>
          <Select
            value={sortOrder}
            onChange={onChangeSortOrderSelectValue}
            selectItems={sortOrderSelectItems}
          />
        </div>
      </div>
    </div>
  );
};
