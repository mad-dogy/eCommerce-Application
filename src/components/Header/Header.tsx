import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';
import { memo } from 'react';
import { Logo } from '../Logo/Logo';
import { PUBLIC_ROUTES, PRIVATE_ROUTES } from '../../constants/routes';
import styles from './Header.module.scss';
import { Navbar } from '../Navbar/Navbar';

interface HeaderProps {
  isAuth: boolean;
  onLogout: () => void;
}

export const Header = memo((props: HeaderProps): JSX.Element => {
  const { isAuth, onLogout } = props;
  return (
    <header className={styles.header}>
      <Link to={PUBLIC_ROUTES.Base}>
        <Logo />
      </Link>

      <Navbar />

      {isAuth
        ? (
          <nav className={styles.header__nav}>
            <Link to={PRIVATE_ROUTES.Cart}>
              <ShoppingCartIcon className={styles.nav__icon} fontSize="large" />
            </Link>
            <Link to={PRIVATE_ROUTES.Profile}>
              <PersonIcon className={styles.nav__icon} fontSize="large" />
            </Link>
            <Link
              to={PRIVATE_ROUTES.Base}
              className={styles.nav__btn}
              onClick={() => { onLogout(); }}
            >
              Logout
            </Link>
          </nav>
        )
        : (
          <nav className={styles.header__nav}>
            <Link to={PUBLIC_ROUTES.Cart}>
              <ShoppingCartIcon className={styles.nav__icon} fontSize="large" />
            </Link>
            <Link to={PUBLIC_ROUTES.BaseRegisterPage} className={styles.nav__btn}>Sign up</Link>
            <Link to={PUBLIC_ROUTES.LoginPage} className={styles.nav__btn}>Log in</Link>
          </nav>
        )}

    </header>
  );
});
