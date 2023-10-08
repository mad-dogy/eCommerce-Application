import { Category, ProductData } from '@commercetools/platform-sdk';
import CircleIcon from '@mui/icons-material/Circle';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useEffect, useState } from 'react';
import CloseBtn from '../../../assets/cross.svg';
import { getCategoryById } from '../../../api/Products/Categories';
import { Loader } from '../../UI/Loader/Loader';
import styles from './ProductItemModal.module.scss';

interface ProductItemModalProps {
  product: ProductData;
  onCloseBtnClick: () => void;
}

export const ProductItemModal = (props: ProductItemModalProps) => {
  const { product, onCloseBtnClick } = props;

  const [isLoading, setLoading] = useState(true);
  const [categories, setCategories] = useState<Category[]>([]);

  const [imgNumber, setImgNumber] = useState(0);

  const productName = product.name['en-US'];
  const productDescription = product.description['en-US'];
  const productCategories = product.categories;

  useEffect(() => {
    const setCategoriesById = async (id: string) => {
      const category = await getCategoryById(id);
      if (category) setCategories([...categories, category]);
    };

    productCategories.map(category => {
      setLoading(true);
      setCategoriesById(category.id).catch();
      setLoading(false);
      return 0;
    });
  }, []);

  const productImages = product.masterVariant.images;
  const productPrice = product.masterVariant.prices[0]?.value.centAmount || 0;
  const productPriceCurrency = product.masterVariant.prices[0]?.value.currencyCode || 'USD';

  return (
    <div className={styles.wrapper}>
      {isLoading
        ? <Loader />
        : (
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

              <div>{productImages.map(() => <CircleIcon />)}</div>

            </div>

            <div>{productName}</div>
            <div>{productDescription}</div>
            <div>
              Categories:
              {' '}
              {categories.length
                ? (
                  <div>
                    {categories.map(category => <span>{category.name['en-US'] || ''}</span>)}
                  </div>
                )
                : <div />}
            </div>
            <div className={styles.price}>
              {`${productPrice / 100} ${productPriceCurrency}`}
            </div>

          </div>
        )}

    </div>
  );
};
