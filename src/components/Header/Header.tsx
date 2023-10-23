import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';
import { memo } from 'react';

import { Logo } from '../Logo/Logo';
import { ROUTES } from '../../constants/routes';
import { Navbar } from '../Navbar/Navbar';
import { useAppSelector } from '../../hooks/redux';
import { getAuthState } from '../../store/selectors/getAuthFields/getAuthState';

import styles from './Header.module.scss';

interface HeaderProps {
  onLogout: () => void;
}

export const Header = memo((props: HeaderProps): JSX.Element => {
  const { onLogout } = props;

  const isAuth = useAppSelector(getAuthState);

  const privateHeaderContent = (
    <div className={styles.nav__content}>
      <Link to={ROUTES.cart()}>
        <ShoppingCartIcon className={styles.nav__icon} fontSize="large" />
      </Link>

      <Link to={ROUTES.profile()}>
        <PersonIcon className={styles.nav__icon} fontSize="large" />
      </Link>

      <Link
        to={ROUTES.main()}
        className={styles.nav__btn}
        onClick={() => {
          onLogout();
        }}
      >
        Logout
      </Link>
    </div>
  );

  const publicHeaderContent = (
    <div className={styles.nav__content}>
      <Link to={ROUTES.cart()}>
        <ShoppingCartIcon className={styles.nav__icon} fontSize="large" />
      </Link>

      <Link to={ROUTES.baseRegister()} className={styles.nav__btn}>
        Sign up
      </Link>

      <Link to={ROUTES.login()} className={styles.nav__btn}>
        Log in
      </Link>
    </div>
  );

  return (
    <header className={styles.header}>
      <Link to={ROUTES.main()}>
        <Logo />
      </Link>

      <Navbar />

      <nav className={styles.header__nav}>
        {isAuth ? privateHeaderContent : publicHeaderContent}
      </nav>
    </header>
  );
});
