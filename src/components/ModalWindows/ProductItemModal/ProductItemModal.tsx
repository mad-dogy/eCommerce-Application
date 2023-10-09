import { ProductData } from '@commercetools/platform-sdk';
import CircleIcon from '@mui/icons-material/Circle';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import React, { useState } from 'react';
import CloseBtn from '../../../assets/cross.svg';
import styles from './ProductItemModal.module.scss';
import { Button } from '../../UI/Button/Button';

interface ProductItemModalProps {
  product: ProductData;
  onCloseBtnClick: (event: React.MouseEvent) => void;
}

export const ProductItemModal = (props: ProductItemModalProps) => {
  const { product, onCloseBtnClick } = props;

  const [imgNumber, setImgNumber] = useState(0);

  const productName = product.name['en-US'];
  const productDescription = product.description['en-US'];
  const productCategories = product.categories;
  const productImages = product.masterVariant.images;
  const productPrice = product.masterVariant.prices[0]?.value.centAmount || 0;
  const productPriceCurrency = product.masterVariant.prices[0]?.value.currencyCode || 'USD';

  return (
    <div className={styles.wrapper}>
      <div className={styles.window}>
        <div className={styles['close-btn']} onClick={onCloseBtnClick}>
          <CloseBtn />
        </div>
        <div className={styles['imgs-container']}>
          {productImages.length > 1
            ? (
              <div className={styles['img-container']}>
                <ArrowForwardIosIcon className={styles.forward_back} />
                <img src={productImages[imgNumber].url} alt="" className={styles.img} />
                <ArrowForwardIosIcon />
              </div>
            )
            : <img src={productImages[imgNumber].url} alt="" className={styles.img} />}
        </div>

        <div className={styles['img-slider-items']}>{productImages.map(() => <CircleIcon />)}</div>

        <div className={styles.info}>
          <div className={styles.info__name}>{productName}</div>
          <div className={styles.info__description}>{productDescription}</div>

          <div className={styles.info__block}>
            <div className={styles.info__price}>
              {`${productPrice / 100} ${productPriceCurrency}`}
            </div>
            <Button className={styles['add-btn']}>Add to cart</Button>
          </div>

        </div>

      </div>

    </div>
  );
};
