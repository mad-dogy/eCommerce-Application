import { RouterProvider, createHashRouter } from 'react-router-dom';
import { ROUTES } from '../constants/routes';
import AppRoot from './AppRoot';
import { LoginPage } from '../pages/LoginPage/LoginPage';
import { BaseRegisterPage } from '../pages/RegisterPages/BaseRegisterPage/BaseRegisterPage';
import { ExtendRegisterPage } from '../pages/RegisterPages/ExtendRegisterPage/ExtendRegisterPage';
import AuthRoot from '../pages/AuthRoot/AuthRoot';

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
        /* path: ROUTES.NotFound,
        element: <NotFoundPage />, */
        /*         loader: async () => {
          const p = () => new Promise((res) => {
            setTimeout(() => res('aaa'), 2000);
          })
          const result = await p();

          if(!p) {
            redirect('/404')
          }

          return {data: result}
        }, */
        /* errorElement: <ErrorPage />, */
      },
      /* {
        path: ROUTES.Any,
        element: <NotFoundPage />
      } */
    ],
  },
]);

const AppRouter = () => <RouterProvider router={router} />;

export default AppRouter;
