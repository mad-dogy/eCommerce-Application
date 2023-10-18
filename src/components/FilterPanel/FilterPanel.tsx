import { QuerySortOptionType, QuerySortOrderType } from '../../store/reducers/catalogSlice';
import { SearchInput } from '../UI/inputs/SearchInput/SearchInput';
import { Select } from '../UI/Select/Select';
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

  return (
    <div className={styles['filter-panel']}>
      <SearchInput searchValue={searchValue} onSearchValueChange={onSearchValueChange} />
      <div className={styles['order-panel']}>
        <span className={styles['order-item']}>
          order by
          <Select
            value={sortOption}
            onChange={event => onSortOptionChange(event.target.value as QuerySortOptionType)}
            selectItems={[
              { name: 'ID', value: 'id' },
              { name: 'Name', value: 'name' },
              { name: 'Date of creation', value: 'createdAt' },
            ]}
          />
        </span>
        <span className={styles['order-item']}>
          order by
          <Select
            value={sortOrder}
            onChange={event => onSortOrderChange(event.target.value as QuerySortOrderType)}
            selectItems={[{ name: 'ASC', value: 'asc' }, { name: 'DESC', value: 'desc' }]}
          />
        </span>
      </div>
    </div>
  );
};
