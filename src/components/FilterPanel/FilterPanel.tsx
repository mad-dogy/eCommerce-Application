import styles from './FilterPanel.module.scss';
import { SearchInput } from '../UI/inputs/SearchInput/SearchInput';
import { Select } from '../UI/Select/Select';

interface FilterPanelProps {
  search: {query: string};
  setSearch: React.Dispatch<React.SetStateAction<{
    query: string;
  }>>;
}
export const FilterPanel = (props: FilterPanelProps) => {
  const { search, setSearch } = props;
  return (
    <div className={styles['filter-panel']}>
      <SearchInput search={search} setSearch={setSearch} />
      <div className={styles['order-panel']}>
        <span className={styles['order-item']}>
          order by
          <Select
            label=""
            selectItems={[{ name: 'price', value: 'price' }]}
          />
        </span>
        <span className={styles['order-item']}>
          order by
          <Select
            label=""
            selectItems={[{ name: 'ASC', value: 'ASC' }, { name: 'DESC', value: 'DESC' }]}
          />
        </span>
      </div>
    </div>
  );
};
