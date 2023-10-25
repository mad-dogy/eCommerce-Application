import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

import NotFoundImg from '../../assets/404.png';
import { ROUTES } from '../../constants/routes';

import styles from './NotFoundPage.module.scss';

export const NotFoundPage = (): JSX.Element => (
  <div className={styles.page}>
    <img className={styles.img} src={NotFoundImg} alt="" />
    <div className={styles.message}>
      <h5>Oh no! You&apos;re lost.</h5>

      <div>
        The page you are looking for does not exist 😟. How you got here is a mystery 🌙✨. But you
        can click on the button below to return to the main page.
      </div>

      <Link to={ROUTES.main()}>
        <Button className={styles['go-home-btn']} variant="contained">
          Home
        </Button>
      </Link>
    </div>
  </div>
);
