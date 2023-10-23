import { RouterProvider, createHashRouter } from 'react-router-dom';

import { LoginPage } from '../pages/LoginPage/LoginPage';
import { BaseRegisterPage } from '../pages/RegisterPages/BaseRegisterPage/BaseRegisterPage';
import { ExtendRegisterPage } from '../pages/RegisterPages/ExtendRegisterPage/ExtendRegisterPage';
import { MainPage } from '../pages/MainPage/MainPage';
import { NotFoundPage } from '../pages/NotFoundPage/NotFoundPage';
import { ErrorPage } from '../pages/ErrorPage/ErrorPage';
import { CartPage } from '../pages/CartPage/CartPage';
import { ProfilePage } from '../pages/ProfilePage/ProfilePage';
import { CatalogPage } from '../pages/CatalogPage/CatalogPage';
import { AboutPage } from '../pages/AboutPage/AboutPage';
import { useAppSelector } from '../hooks/redux';
import { getAuthState } from '../store/selectors/getAuthFields/getAuthState';
import { ROUTES } from '../constants/routes';
import { Loader } from '../components/UI/Loader/Loader';

import { PrivateRoute } from './decorators/PrivateRoute';
import { ExtendRegisterRoute } from './decorators/ExtendRegisterRoute';
import { MainRoot } from './MainRoot/MainRoot';
import AuthRoot from './AuthRoot/AuthRoot';
import AppRoot from './AppRoot';

export const router = createHashRouter([
  {
    path: ROUTES.Base,
    element: <AppRoot />,
    children: [
      {
        path: ROUTES.Auth,
        element: <AuthRoot />,
        children: [
          {
            path: ROUTES.LoginPage,
            element: <LoginPage />,
            errorElement: <ErrorPage />
          },
          {
            path: ROUTES.BaseRegisterPage,
            element: <BaseRegisterPage />,
            errorElement: <ErrorPage />
          },
          {
            path: ROUTES.ExtendRegisterPage,
            element: (
              <ExtendRegisterRoute>
                <ExtendRegisterPage />
              </ExtendRegisterRoute>
            ),
            errorElement: <ErrorPage />
          }
        ]
      },
      {
        path: ROUTES.Base,
        element: <MainRoot />,
        children: [
          {
            path: ROUTES.Base,
            element: <MainPage />,
            errorElement: <ErrorPage />
          },
          {
            path: ROUTES.Cart,
            element: <CartPage />,
            errorElement: <ErrorPage />
          },
          {
            path: ROUTES.Catalog,
            element: <CatalogPage />,
            errorElement: <ErrorPage />
          },
          {
            path: ROUTES.About,
            element: <AboutPage />,
            errorElement: <ErrorPage />
          },
          {
            path: ROUTES.Profile,
            element: (
              <PrivateRoute>
                <ProfilePage />
              </PrivateRoute>
            ),
            errorElement: <ErrorPage />
          },
          {
            path: ROUTES.Any,
            element: <NotFoundPage />,
            errorElement: <ErrorPage />
          }
        ]
      }
    ]
  }
]);

const AppRouter = (): JSX.Element => {
  const isAuth = useAppSelector(getAuthState);
  if (isAuth === undefined) {
    return <Loader />;
  }

  return <RouterProvider router={router} />;
};

export default AppRouter;
