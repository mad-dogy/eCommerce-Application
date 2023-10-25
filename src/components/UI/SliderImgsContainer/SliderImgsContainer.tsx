import { Image } from '@commercetools/platform-sdk';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import styles from './SliderImgsContainer.module.scss';

interface SliderImgsContainerProps {
  images: Image[];
  currentImg: number;
}

export const SliderImgsContainer = (props: SliderImgsContainerProps) => {
  const { images, currentImg } = props;

  return (
    <div className={styles['imgs-container']}>
      {images.length > 1 ? (
        <div className={styles['img-container']}>
          <ArrowForwardIosIcon className={styles.forward_back} />
          <img src={images[currentImg].url} alt="" className={styles.img} />
          <ArrowForwardIosIcon />
        </div>
      ) : (
        <img src={images[currentImg].url} alt="" className={styles.img} />
      )}
    </div>
  );
};
