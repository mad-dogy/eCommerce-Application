import { useEffect } from 'react';
import { LOCAL_STORAGE_KEYS } from './constants/constants';
import AppRouter from './router/AppRouter';
import { useAppDispatch } from './hooks/redux';
import { authSlice } from './store/reducers/authSlice';
import { profileSlice } from './store/reducers/profileSlice';

const { setAuth } = authSlice.actions;
const { setCustomerId } = profileSlice.actions;

export const App = (): JSX.Element => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const customerId = localStorage.getItem(LOCAL_STORAGE_KEYS.customerId);
    if (customerId) {
      dispatch(setCustomerId(customerId));
      dispatch(setAuth(true));
    } else {
      dispatch(setAuth(false));
    }
  }, []);

  return (
    <AppRouter />
  );
};
