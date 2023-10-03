import styles from './FilterPanel.module.scss';
import { SearchInput } from '../UI/inputs/SearchInput/SearchInput';
import { Select } from '../UI/Select/Select';

export const FilterPanel = () => (
  <div className={styles['filter-panel']}>
    <SearchInput />
    <div>
      <span>
        order by
        <Select
          label=""
          selectItems={[{ name: 'price', value: 'price' }]}
        />
      </span>
      <span>
        order by
        <Select
          label=""
          selectItems={[{ name: 'ASC', value: 'ASC' }, { name: 'DESC', value: 'DESC' }]}
        />
      </span>
    </div>
  </div>
);
