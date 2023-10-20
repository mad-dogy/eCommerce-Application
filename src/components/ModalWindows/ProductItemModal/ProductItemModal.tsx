import { Image, Product, ProductData } from '@commercetools/platform-sdk';
import React, { useEffect, useState } from 'react';
import CloseBtn from '../../../assets/cross.svg';
import { Button } from '../../UI/Button/Button';
import { getProductById } from '../../../api/Products/Products';
import { Loader } from '../../UI/Loader/Loader';
import styles from './ProductItemModal.module.scss';
import { SliderItemsNav } from '../../UI/SliderItemsNav/SliderImagesNav';
import { SliderImgsContainer } from '../../UI/SliderImgsContainer/SliderImgsContainer';

interface ProductItemModalProps {
  productId: string | undefined;
  onCloseBtnClick: (event: React.MouseEvent) => void;
}

export const ProductItemModal = (props: ProductItemModalProps) => {
  const { productId, onCloseBtnClick } = props;

  const [isLoading, setLoading] = useState(true);
  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    const setProductById = async (id: string) => {
      setLoading(true);
      const receivedProduct = await getProductById(id);
      setLoading(false);
      setProduct(receivedProduct);
    };

    setProductById(productId).catch(error => alert(error));
  }, [productId]);

  const [imgNumber, setImgNumber] = useState(0);

  const productInfo: ProductData = product?.masterData.current;
  const productName: string = productInfo?.name['en-US'] || '';
  const productDescription: string = productInfo?.description['en-US'] || '';
  const productImages: Image[] = productInfo?.masterVariant.images || [];
  const productPriceInCents: number = productInfo?.masterVariant.prices[0]?.value.centAmount || 0;
  const productPrice: number = productPriceInCents / 100;
  const productPriceCurrency: string = productInfo?.masterVariant.prices[0]?.value.currencyCode || 'USD';

  if (productId === undefined) return;

  let productContent;
  if (!isLoading) {
    productContent = (
      <div className={styles.window__inner}>
        <SliderImgsContainer
          images={productImages}
          currentImg={imgNumber}
        />

        <SliderItemsNav
          productImages={productImages}
          activeItemIndex={imgNumber}
        />

        <div className={styles.info}>
          <div className={styles.info__name}>{productName}</div>
          <div className={styles.info__description}>{productDescription}</div>

          <div className={styles.info__block}>
            <span className={styles.info__price}>
              {`${productPrice} ${productPriceCurrency}`}
            </span>
            <Button className={styles['add-btn']}>Add to cart</Button>
          </div>

        </div>
      </div>
    );
  } else {
    productContent = <Loader />;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.window}>
        <div className={styles['close-btn']} onClick={onCloseBtnClick}>
          <CloseBtn />
        </div>
        {productContent}
      </div>
    </div>
  );
};
