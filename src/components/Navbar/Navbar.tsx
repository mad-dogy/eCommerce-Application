import { Link } from 'react-router-dom';
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from '../../constants/routes';
import styles from './Navbar.module.scss';
import { useAppSelector } from '../../hooks/redux';

export const Navbar = () => {
  const { isAuth } = useAppSelector(state => state.authReducer);
  const routes = isAuth ? PRIVATE_ROUTES : PUBLIC_ROUTES;
  return (
    <nav className={styles.navbar}>
      <Link to={routes.Base}>Home</Link>
      <Link to={routes.Catalog}>Catalog</Link>
      <Link to={routes.About}>About us</Link>
    </nav>
  );
};
