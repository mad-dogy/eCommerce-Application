import { Header } from '../../components/Header/Header';
import styles from './MainPage.module.scss';

export const MainPage = (): JSX.Element => (
  <div className={styles.main}>
    <Header />
  </div>
);
