import { useEffect } from 'react';

import AppRouter from './router/AppRouter';
import { useAppDispatch } from './hooks/redux';
import { authSlice } from './store/reducers/authSlice';
import { profileSlice } from './store/reducers/profileSlice';

const { initAuth } = authSlice.actions;
const { initProfile } = profileSlice.actions;

export const App = (): JSX.Element => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(initAuth());
    dispatch(initProfile());
  }, []);

  return <AppRouter />;
};
