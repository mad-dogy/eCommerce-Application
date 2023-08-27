import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { Logo } from '../Logo/Logo';
import { ROUTES } from '../../constants/routes';
import styles from './Header.module.scss';

export const Header = (): JSX.Element => (
  <header className={styles.header}>
    <Logo />

    <nav className={styles.header__nav}>
      <Link to={ROUTES.BaseRegisterPage} className={styles.nav__btn}>Sign up</Link>
      <Link to={ROUTES.LoginPage} className={styles.nav__btn}>Log in</Link>
      <Link to={ROUTES.Cart}>
        <ShoppingCartIcon className={styles.nav__icon} />
      </Link>
    </nav>
  </header>
);
