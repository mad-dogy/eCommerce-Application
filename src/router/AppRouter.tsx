import { RouterProvider, createHashRouter } from 'react-router-dom';
import { useContext } from 'react';
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from '../constants/routes';
import AppRoot from './AppRoot';
import { LoginPage } from '../pages/LoginPage/LoginPage';
import { BaseRegisterPage } from '../pages/RegisterPages/BaseRegisterPage/BaseRegisterPage';
import { ExtendRegisterPage } from '../pages/RegisterPages/ExtendRegisterPage/ExtendRegisterPage';
import AuthRoot from './AuthRoot/AuthRoot';
import { MainPage } from '../pages/MainPage/MainPage';
import { MainRoot } from './MainRoot/MainRoot';
import { NotFoundPage } from '../pages/NotFoundPage/NotFoundPage';
import { ErrorPage } from '../pages/ErrorPage/ErrorPage';
import { CartPage } from '../pages/CartPage/CartPage';
import { ProfilePage } from '../pages/ProfilePage/ProfilePage';
import { AuthContext } from '../context';

const publicRouter = createHashRouter([
  {
    path: PUBLIC_ROUTES.Base,
    element: <AppRoot />,
    children: [
      {
        path: PUBLIC_ROUTES.Auth,
        element: <AuthRoot />,
        children: [
          {
            path: PUBLIC_ROUTES.LoginPage,
            element: <LoginPage />,
            errorElement: <ErrorPage />,
          },
          {
            path: PUBLIC_ROUTES.BaseRegisterPage,
            element: <BaseRegisterPage />,
            errorElement: <ErrorPage />,
          },
          {
            path: PUBLIC_ROUTES.ExtendRegisterPage,
            element: <ExtendRegisterPage />,
            errorElement: <ErrorPage />,
          },
        ],
      },
      {
        path: PUBLIC_ROUTES.Base,
        element: <MainRoot />,
        children: [
          {
            path: PUBLIC_ROUTES.Base,
            element: <MainPage />,
            errorElement: <ErrorPage />,
          },
          {
            path: PUBLIC_ROUTES.Cart,
            element: <CartPage />,
            errorElement: <ErrorPage />,
          },
          {
            path: PUBLIC_ROUTES.Any,
            element: <NotFoundPage />,
            errorElement: <ErrorPage />,
          },
        ],
      },
    ],
  },
]);

const privateRouter = createHashRouter([
  {
    path: PRIVATE_ROUTES.Base,
    element: <AppRoot />,
    children: [
      {
        path: PRIVATE_ROUTES.Auth,
        element: <AuthRoot />,
        children: [
          {
            path: PRIVATE_ROUTES.ExtendRegisterPage,
            element: <ExtendRegisterPage />,
            errorElement: <ErrorPage />,
          },
        ],
      },
      {
        path: PRIVATE_ROUTES.Base,
        element: <MainRoot />,
        children: [
          {
            path: PRIVATE_ROUTES.Base,
            element: <MainPage />,
            errorElement: <ErrorPage />,
          },
          {
            path: PRIVATE_ROUTES.Cart,
            element: <CartPage />,
            errorElement: <ErrorPage />,
          },
          {
            path: PRIVATE_ROUTES.Profile,
            element: <ProfilePage />,
            errorElement: <ErrorPage />,
          },
          {
            path: PUBLIC_ROUTES.Any,
            element: <NotFoundPage />,
            errorElement: <ErrorPage />,
          },
        ],
      },
    ],
  },
]);

const AppRouter = () => <RouterProvider router={publicRouter} />;

export default AppRouter;
