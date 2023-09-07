import { useEffect, useState } from 'react';
import './index.scss';
import AppRouter from './router/AppRouter';
import { AuthContext } from './context';

export const App = (): JSX.Element => {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('customerId')) {
      setIsAuth(true);
    }
  });

  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth,
    }}
    >
      <AppRouter isAuth={isAuth} />
    </AuthContext.Provider>
  );
};
