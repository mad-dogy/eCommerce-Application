import { Link } from 'react-router-dom';

import { ROUTES } from '../../constants/routes';

import styles from './Navbar.module.scss';

export const Navbar = () => (
  <nav className={styles.navbar}>
    <Link to={ROUTES.main()}>Home</Link>
    <Link to={ROUTES.catalog()}>Catalog</Link>
    <Link to={ROUTES.about()}>About us</Link>
  </nav>
);
