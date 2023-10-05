import { Product } from '@commercetools/platform-sdk';
import styles from './ProductItem.module.scss';

interface ProductItemProps {
  product: Product;
}

export const ProductItem = (props: ProductItemProps) => {
  const { product } = props;
  return (
    <div className={styles.product}>
      <img
        src={product.masterData.staged.masterVariant.images[0].url}
        alt=""
        className={styles.product__img}
      />
      {product.masterData.current.name['en-US']}
    </div>
  );
};
