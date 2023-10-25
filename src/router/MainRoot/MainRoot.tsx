import { memo, useCallback } from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '../../components/Header/Header';
import { useAppDispatch } from '../../hooks/redux';
import { authSlice } from '../../store/reducers/authSlice';

import styles from './MainRoot.module.scss';

const { logout } = authSlice.actions;

export const MainRoot = memo(() => {
  const dispatch = useAppDispatch();

  const onLogout = useCallback(() => {
    dispatch(logout());
  }, [logout]);

  return (
    <div className={styles.mainRoot}>
      <Header onLogout={onLogout} />

      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
});
