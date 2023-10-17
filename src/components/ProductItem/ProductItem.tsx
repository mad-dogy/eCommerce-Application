import { ProductProjection } from '@commercetools/platform-sdk';
import { Button } from '../UI/Button/Button';
import styles from './ProductItem.module.scss';

interface ProductItemProps {
  product: ProductProjection;
  onItemClick: (productId: string) => void
}

export const ProductItem = (props: ProductItemProps) => {
  const { product, onItemClick } = props;

  const productId = product.id;
  const productImgUrl = product.masterVariant.images[0].url;
  const productName = product.name['en-US'];
  const productPrice = product.masterVariant.prices[0]?.value.centAmount || 0;
  const productPriceCurrency = product.masterVariant.prices[0]?.value.currencyCode || 'USD';

  return (
    <div className={styles.product} onClick={() => onItemClick(productId)}>
      <img
        src={productImgUrl}
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

      <Button className={styles.btn}>To cart</Button>
    </div>
  );
};
