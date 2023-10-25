import { Navigate } from 'react-router-dom';

import { useAppSelector } from '../../hooks/redux';
import { getAuthState } from '../../store/selectors/getAuthFields/getAuthState';

interface ExtendRegisterRouteProps {
  children: JSX.Element;
}

export const ExtendRegisterRoute = (props: ExtendRegisterRouteProps) => {
  const { children } = props;

  const isAuth = useAppSelector(getAuthState);

  return isAuth ? children : <Navigate to="/404" />;
};
