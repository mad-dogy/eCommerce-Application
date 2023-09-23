import {
  memo, useCallback, useContext,
} from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import { AuthContext } from '../../context';
import { LOCAL_STORAGE_KEYS } from '../../constants/constants';
import styles from './MainRoot.module.scss';

export const MainRoot = memo(() => {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const onLogout = useCallback(() => {
    setIsAuth(false);
    localStorage.removeItem(LOCAL_STORAGE_KEYS.customerId);
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
