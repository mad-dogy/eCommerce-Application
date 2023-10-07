import { Product } from '@commercetools/platform-sdk';
import CloseBtn from '../../../assets/cross.svg';
import styles from './ProductItemModal.module.scss';

interface ProductItemModalProps {
  productInfo: Product;
  onCloseBtnClick: () => void;
}

export const ProductItemModal = (props: ProductItemModalProps) => {
  const { productInfo, onCloseBtnClick } = props;

  return (
    <div className={styles.wrapper}>
      <div className={styles.window}>
        <div className={styles['close-btn']} onClick={onCloseBtnClick}>
          <CloseBtn />
        </div>
        <div>{productInfo.masterData.current.name['en-US']}</div>
      </div>
    </div>
  );
};
