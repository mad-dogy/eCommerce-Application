import { FilterPanel } from '../../components/FilterPanel/FilterPanel';
import styles from './CatalogPage.module.scss';

export const CatalogPage = () => (
  <div className={styles.catalog}>
    <FilterPanel />
  </div>
);
