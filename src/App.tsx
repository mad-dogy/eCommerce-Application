import { useEffect, useMemo, useState } from 'react';
import './index.scss';
import AppRouter from './router/AppRouter';
import { AuthContext } from './context';

export const App = (): JSX.Element => {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('customerId')) {
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
