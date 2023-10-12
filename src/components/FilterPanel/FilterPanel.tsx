import { SearchInput } from '../UI/inputs/SearchInput/SearchInput';
import { Select } from '../UI/Select/Select';
import styles from './FilterPanel.module.scss';

interface FilterPanelProps {
  search: {query: string};
  setSearch: React.Dispatch<React.SetStateAction<{
    query: string;
  }>>;

  sort: { option: string, order: string }
  setSort: React.Dispatch<React.SetStateAction<{
    option: string;
    order: string;
  }>>
}
export const FilterPanel = (props: FilterPanelProps) => {
  const {
    search, setSearch, sort, setSort,
  } = props;
  return (
    <div className={styles['filter-panel']}>
      <SearchInput search={search} setSearch={setSearch} />
      <div className={styles['order-panel']}>
        <span className={styles['order-item']}>
          order by
          <Select
            value={sort.option}
            onChange={(event) => setSort({ ...sort, option: event.target.value as string })}
            label=""
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
            value={sort.order}
            onChange={(event) => setSort({ ...sort, order: event.target.value as string })}
            label=""
            selectItems={[{ name: 'ASC', value: 'ASC' }, { name: 'DESC', value: 'DESC' }]}
          />
        </span>
      </div>
    </div>
  );
};
