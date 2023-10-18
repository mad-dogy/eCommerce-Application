import { memo, useCallback } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import { LOCAL_STORAGE_KEYS } from '../../constants/constants';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { authSlice } from '../../store/reducers/authSlice';
import styles from './MainRoot.module.scss';

const { setAuth } = authSlice.actions;

export const MainRoot = memo(() => {
  const dispatch = useAppDispatch();
  const { isAuth } = useAppSelector(state => state.authReducer);

  const onLogout = useCallback(() => {
    dispatch(setAuth(false));
    localStorage.removeItem(LOCAL_STORAGE_KEYS.customerId);
  }, [setAuth]);

  return (
    <div className={styles.mainRoot}>
      <Header isAuth={isAuth} onLogout={onLogout} />

      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
});
