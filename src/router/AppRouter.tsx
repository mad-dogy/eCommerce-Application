import { RouterProvider, createHashRouter } from 'react-router-dom';
import { ROUTES } from '../constants/routes';
import AppRoot from './AppRoot';
import { LoginPage } from '../pages/LoginPage/LoginPage';
import { BaseRegisterPage } from '../pages/RegisterPages/BaseRegisterPage/BaseRegisterPage';
import { ExtendRegisterPage } from '../pages/RegisterPages/ExtendRegisterPage/ExtendRegisterPage';
import AuthRoot from './AuthRoot/AuthRoot';
import { MainPage } from '../pages/MainPage/MainPage';
import { MainRoot } from './MainRoot/MainRoot';
import { NotFoundPage } from '../pages/NotFoundPage/NotFoundPage';

const router = createHashRouter([
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
            /* errorElement: <ErrorPage />, */
          },
          {
            path: ROUTES.BaseRegisterPage,
            element: <BaseRegisterPage />,
            /* errorElement: <ErrorPage />, */
          },
          {
            path: ROUTES.ExtendRegisterPage,
            element: <ExtendRegisterPage />,
            /* errorElement: <ErrorPage />, */
          },
        ],
      },
      {
        path: ROUTES.Base,
        element: <MainRoot />,
        children: [
          {
            path: ROUTES.Base,
            element: <MainPage />,
          },
          {
            path: ROUTES.Cart,
            element: <MainPage />,
          },
          {
            path: ROUTES.Any,
            element: <NotFoundPage />,
          },
        ],
      },
    ],
  },
]);

const AppRouter = () => <RouterProvider router={router} />;

export default AppRouter;
