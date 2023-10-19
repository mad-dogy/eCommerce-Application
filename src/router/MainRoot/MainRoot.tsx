import { memo, useCallback } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import { LOCAL_STORAGE_KEYS } from '../../constants/constants';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { authSlice } from '../../store/reducers/authSlice';
import styles from './MainRoot.module.scss';
import { getAuthState } from '../../store/selectors/getAuthFields/getAuthState';

const { setAuth } = authSlice.actions;

export const MainRoot = memo(() => {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(getAuthState);

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
