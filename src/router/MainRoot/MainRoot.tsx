import { memo, useContext } from 'react';
import { Outlet } from 'react-router-dom';
import styles from './MainRoot.module.scss';
import { Header } from '../../components/Header/Header';
import { AuthContext } from '../../context';

export const MainRoot = memo(() => {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  return (
    <div className={styles.mainRoot}>
      <Header isAuth={isAuth} />
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
});
