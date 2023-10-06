import { Product } from '@commercetools/platform-sdk';
import styles from './ProductItem.module.scss';

interface ProductItemProps {
  product: Product;
}

export const ProductItem = (props: ProductItemProps) => {
  const { product } = props;
  const productInfo = product.masterData.current;
  const productName = productInfo.name['en-US'];
  const productPrice = productInfo.masterVariant.prices[0]?.value.centAmount || 0;
  const productPriceCurrency = productInfo.masterVariant.prices[0]?.value.currencyCode || 'USD';

  console.log(product);

  return (
    <div className={styles.product}>
      <img
        src={product.masterData.staged.masterVariant.images[0].url}
        alt=""
        className={styles.product__img}
      />
      <div className={styles.product__characteristic}>
        <div className={styles.name}>
          {productName}
        </div>
        <div className={styles.price}>
          {`${productPrice / 100} ${productPriceCurrency}`}
        </div>
      </div>

    </div>
  );
};
