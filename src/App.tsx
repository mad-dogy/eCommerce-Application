import { useEffect, useMemo, useState } from 'react';
import { LOCAL_STORAGE_KEYS } from './constants/constants';
import AppRouter from './router/AppRouter';
import { AuthContext } from './context';
import './index.scss';

export const App = (): JSX.Element => {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(LOCAL_STORAGE_KEYS.customerId)) {
      setIsAuth(true);
    }
  }, []);

  const value = useMemo(() => ({
    isAuth,
    setIsAuth,
  }), [isAuth, setIsAuth]);

  return (
    <AuthContext.Provider value={value}>
      <AppRouter isAuth={isAuth} />
    </AuthContext.Provider>
  );
};
