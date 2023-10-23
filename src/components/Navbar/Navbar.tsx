import { Link } from 'react-router-dom';

import { ROUTES } from '../../constants/routes';

import styles from './Navbar.module.scss';

export const Navbar = () => (
  <nav className={styles.navbar}>
    <Link to={ROUTES.Base}>Home</Link>
    <Link to={ROUTES.Catalog}>Catalog</Link>
    <Link to={ROUTES.About}>About us</Link>
  </nav>
);
