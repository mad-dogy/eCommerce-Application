import styles from './ErrorPage.module.scss';
import ErrorImg from '../../assets/error.png';

export const ErrorPage = (): JSX.Element => (
  <div className={styles.page}>
    <img className={styles.img} src={ErrorImg} alt="" />
    <div className={styles.message}>
      <h5>Something went wrong</h5>
      <div>
        Please try again later
      </div>
    </div>
  </div>
);
