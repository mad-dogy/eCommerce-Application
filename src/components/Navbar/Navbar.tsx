import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from '../../constants/routes';
import { AuthContext } from '../../context';
import styles from './Navbar.module.scss';

export const Navbar = () => {
  const { isAuth, setAuth } = useContext(AuthContext);
  const routes = isAuth ? PRIVATE_ROUTES : PUBLIC_ROUTES;
  return (
    <nav className={styles.navbar}>
      <Link to={routes.Base}>Home</Link>
      <Link to={routes.Catalog}>Catalog</Link>
      <Link to={routes.About}>About us</Link>
    </nav>
  );
};
