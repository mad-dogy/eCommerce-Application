import { useEffect } from 'react';
import { LOCAL_STORAGE_KEYS } from './constants/constants';
import AppRouter from './router/AppRouter';
import { useAppDispatch } from './hooks/redux';
import { authSlice } from './store/reducers/authSlice';

const { setAuth } = authSlice.actions;

export const App = (): JSX.Element => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (localStorage.getItem(LOCAL_STORAGE_KEYS.customerId)) {
      dispatch(setAuth(true));
    } else {
      dispatch(setAuth(false));
    }
  }, []);

  return (
    <AppRouter />
  );
};
