import { useEffect, useMemo, useState } from 'react';
import { LOCAL_STORAGE_KEYS } from './constants/constants';
import AppRouter from './router/AppRouter';
import { AuthContext } from './context';
import './index.scss';
/* import 'swiper/css'; */

export const App = (): JSX.Element => {
  const [isAuth, setAuth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(LOCAL_STORAGE_KEYS.customerId)) {
      setAuth(true);
    }
  }, []);

  const value = useMemo(() => ({
    isAuth,
    setAuth,
  }), [isAuth, setAuth]);

  return (
    <AuthContext.Provider value={value}>
      <AppRouter isAuth={isAuth} />
    </AuthContext.Provider>
  );
};
