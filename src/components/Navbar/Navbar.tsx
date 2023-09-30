import { Link } from 'react-router-dom';
import { PUBLIC_ROUTES } from '../../constants/routes';

export const Navbar = () => (
  <div>
    <Link to={PUBLIC_ROUTES.Base}>Home</Link>
    <Link to={PUBLIC_ROUTES.Base}>Catalog</Link>
    <Link to={PUBLIC_ROUTES.Base}>About us</Link>
  </div>
);
