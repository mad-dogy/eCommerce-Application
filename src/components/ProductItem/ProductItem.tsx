import { Product } from '@commercetools/platform-sdk';
import { useState } from 'react';
import styles from './ProductItem.module.scss';
import { Button } from '../UI/Button/Button';
import { ProductItemModal } from '../ModalWindows/ProductItemModal/ProductItemModal';

interface ProductItemProps {
  product: Product;
}

export const ProductItem = (props: ProductItemProps) => {
  const { product } = props;

  const [isInfoOpened, setInfoOpened] = useState(false);

  const productInfo = product.masterData.current;
  const productImgUrl = productInfo.masterVariant.images[0].url;
  const productName = productInfo.name['en-US'];
  const productPrice = productInfo.masterVariant.prices[0]?.value.centAmount || 0;
  const productPriceCurrency = productInfo.masterVariant.prices[0]?.value.currencyCode || 'USD';

  console.log(product);
  console.log(isInfoOpened);

  const onOpenItem = () => {
    setInfoOpened(true);
    setTimeout(() => setInfoOpened(false), 3000);
  };

  const onCloseItem = () => {
    setInfoOpened(false);
  };

  return (
    <div className={styles.product} onClick={onOpenItem}>
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

      {isInfoOpened
        ? <ProductItemModal product={productInfo} onCloseBtnClick={onCloseItem} />
        : <div />}
    </div>
  );
};
