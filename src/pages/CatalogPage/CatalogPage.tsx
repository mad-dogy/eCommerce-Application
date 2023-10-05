import { useEffect, useState } from 'react';
import { Product, ProductPagedQueryResponse } from '@commercetools/platform-sdk';
import { FilterPanel } from '../../components/FilterPanel/FilterPanel';
import { ProductsContainer } from '../../components/ProductsContainer/ProductsContainer';
import styles from './CatalogPage.module.scss';
import { queryProducts } from '../../api/Products/Products';

export const CatalogPage = () => {
  const [products, setProducts] = useState<Product[]>();
  const [IsLoading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const productsFromServer = await queryProducts();
      setProducts(productsFromServer.results);
      setLoading(false);
    };

    getProducts().catch((error) => { alert(error); });
  }, []);

  return (
    <div className={styles.catalog}>
      <FilterPanel />
      <ProductsContainer products="" />
    </div>
  );
};
