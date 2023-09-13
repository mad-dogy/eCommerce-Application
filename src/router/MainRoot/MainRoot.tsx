import {
  memo, useCallback, useContext,
} from 'react';
import { Outlet } from 'react-router-dom';
import styles from './MainRoot.module.scss';
import { Header } from '../../components/Header/Header';
import { AuthContext } from '../../context';

export const MainRoot = memo(() => {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const onLogout = useCallback(() => {
    setIsAuth(false);
    localStorage.removeItem('customerId');
  }, [setIsAuth]);

  return (
    <div className={styles.mainRoot}>
      <Header isAuth={isAuth} onLogout={onLogout} />

      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
});
