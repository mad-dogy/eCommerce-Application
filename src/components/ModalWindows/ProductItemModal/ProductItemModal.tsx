import { Image, Product, ProductData } from '@commercetools/platform-sdk';
import CircleIcon from '@mui/icons-material/Circle';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import React, { useEffect, useState } from 'react';
import CloseBtn from '../../../assets/cross.svg';
import { Button } from '../../UI/Button/Button';
import { SwiperComponent } from '../../SwiperComponentMy/SwiperComponentMy';
import { getProductById } from '../../../api/Products/Products';
import { Loader } from '../../UI/Loader/Loader';
import styles from './ProductItemModal.module.scss';

interface ProductItemModalProps {
  productId: string;
  onCloseBtnClick: (event: React.MouseEvent) => void;
}

export const ProductItemModal = (props: ProductItemModalProps) => {
  const { productId, onCloseBtnClick } = props;

  const [isLoading, setLoading] = useState(true);
  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    if (!productId) return;
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
  const productPrice: number = productInfo?.masterVariant.prices[0]?.value.centAmount || 0;
  const productPriceCurrency: string = productInfo?.masterVariant.prices[0]?.value.currencyCode || 'USD';

  let productItemContent;
  if (product) {
    productItemContent = (
      <div className={styles.wrapper}>
        <div className={styles.window}>
          <div className={styles['close-btn']} onClick={onCloseBtnClick}>
            <CloseBtn />
          </div>
          {/* <SwiperComponent /> */}
          {
            isLoading
              ? <Loader />
              : (
                <div className={styles.window__inner}>
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

                  {productImages.length > 1
                    ? (
                      <div className={styles['img-slider-items']}>
                        {productImages.map((item, index) => {
                          if (index === imgNumber) {
                            return <CircleIcon className={`${styles['slider-item_active']}`} />;
                          }
                          return <CircleIcon className={styles['slider-item']} />;
                        })}
                      </div>
                    )
                    : <div />}

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
              )
          }
        </div>
      </div>
    );
  }
  return (
    <div>
      {productId
        ? <div>{productItemContent}</div>
        : <div />}
    </div>

  );
};
