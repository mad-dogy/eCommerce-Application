import { Navigate } from 'react-router-dom';

import { useAppSelector } from '../../hooks/redux';
import { getAuthState } from '../../store/selectors/getAuthFields/getAuthState';

interface PrivateRouteProps {
  children: JSX.Element;
}

export const PrivateRoute = (props: PrivateRouteProps) => {
  const { children } = props;

  const isAuth = useAppSelector(getAuthState);

  return isAuth ? children : <Navigate to="/404" />;
};
