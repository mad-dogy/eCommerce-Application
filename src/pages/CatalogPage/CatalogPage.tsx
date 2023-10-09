import { useEffect, useState } from 'react';
import { ProductPagedQueryResponse } from '@commercetools/platform-sdk';
import { FilterPanel } from '../../components/FilterPanel/FilterPanel';
import { ProductsList } from '../../components/ProductsList/ProductsList';
import { queryProducts } from '../../api/Products/Products';
import { Loader } from '../../components/UI/Loader/Loader';
import styles from './CatalogPage.module.scss';

export const CatalogPage = () => {
  const [products, setProducts] = useState<ProductPagedQueryResponse>();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const productsFromServer = await queryProducts();
      setProducts(productsFromServer);
      setLoading(false);
    };

    getProducts().catch((error) => { alert(error); });
  }, []);

  return (
    <div className={styles.catalog}>
      <FilterPanel />
      {isLoading
        ? <Loader />
        : <ProductsList productsInfo={products} />}
    </div>
  );
};
