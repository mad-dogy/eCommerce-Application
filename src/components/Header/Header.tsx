import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { Logo } from '../Logo/Logo';
import { ROUTES } from '../../constants/routes';
import styles from './Header.module.scss';
import { getEndPoint, getProjectDetails } from '../../api/CreateClient';

interface HeaderProps {
  isAuth: boolean,
  onLogout: () => void
}

export const Header = (props: HeaderProps): JSX.Element => {
  const { isAuth, onLogout } = props;
  return (
    <header className={styles.header}>
      <Link to={ROUTES.Base}>
        <Logo />
      </Link>

      <Button type="button" onClick={() => { getProjectDetails(); }}>api</Button>
      <Button type="button" onClick={() => { getEndPoint(); }}>categ</Button>

      {isAuth
        ? (
          <nav className={styles.header__nav}>
            <Link to={ROUTES.Cart}>
              <ShoppingCartIcon className={styles.nav__icon} fontSize="large" />
            </Link>
            <Link to={ROUTES.Cart}>
              <PersonIcon className={styles.nav__icon} fontSize="large" />
            </Link>
            <Link
              to={ROUTES.Base}
              className={styles.nav__btn}
              onClick={() => { onLogout(); }}
            >
              Logout
            </Link>
          </nav>
        )
        : (
          <nav className={styles.header__nav}>
            <Link to={ROUTES.Cart}>
              <ShoppingCartIcon className={styles.nav__icon} fontSize="large" />
            </Link>
            <Link to={ROUTES.BaseRegisterPage} className={styles.nav__btn}>Sign up</Link>
            <Link to={ROUTES.LoginPage} className={styles.nav__btn}>Log in</Link>
          </nav>
        )}

    </header>
  );
};
