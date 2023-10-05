import { ProductPagedQueryResponse } from '@commercetools/platform-sdk';
import { ProductItem } from '../ProductItem/ProductItem';
import styles from './ProductsContainer.module.scss';

interface ProductsContainerProps {
  productsInfo: ProductPagedQueryResponse;
}

export const ProductsContainer = (props: ProductsContainerProps) => {
  const { productsInfo } = props;
  const products = productsInfo.results;

  return (
    <div className={styles.container}>
      {products.map(item => <ProductItem product={item} />)}
    </div>
  );
};
