import LogoIcon from '../../assets/logo.svg';
import styles from './Logo.module.scss';

export const Logo = (): JSX.Element => (
  <div className={styles.logo}>
    <div>Supernatural</div>
    <LogoIcon />
  </div>
);
