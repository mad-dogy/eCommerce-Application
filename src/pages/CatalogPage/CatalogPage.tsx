import { FilterPanel } from '../../components/FilterPanel/FilterPanel';
import { ProductsContainer } from '../../components/ProductsContainer/ProductsContainer';
import styles from './CatalogPage.module.scss';

export const CatalogPage = () => (
  <div className={styles.catalog}>
    <FilterPanel />
    <ProductsContainer products="" />
  </div>
);
