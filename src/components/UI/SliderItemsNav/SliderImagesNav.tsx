import { Image } from '@commercetools/platform-sdk';
import CircleIcon from '@mui/icons-material/Circle';
import styles from './SliderImagesNav.module.scss';

interface SliderItemsNavProps {
  productImages: Image[];
  activeItemIndex: number
}

export const SliderItemsNav = (props: SliderItemsNavProps) => {
  const { productImages, activeItemIndex } = props;

  const itemsCount = productImages.length;

  return (
    <div>
      {itemsCount > 1
        ? (
          <div className={styles['img-slider-items']}>
            {productImages.map((item, index) => (
              <CircleIcon className={
                index === activeItemIndex ? `${styles['slider-item_active']}` : styles['slider-item']
              }
              />
            ))}
          </div>
        )
        : <div />}
    </div>
  );
};
