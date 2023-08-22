import { RouterProvider, createHashRouter } from 'react-router-dom';
import { ROUTES } from '../constants/routes';
import AppRoot from './AppRoot';

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
            path: ROUTES.Login,
            element: <LoginPage />,
            errorElement: <ErrorPage />
          },
          {
            path: ROUTES.Signup,
            element: <RegisterPage />,
            errorElement: <ErrorPage />
          },
          {
            path: ROUTES.ForgotPassword,
            element: <ForgotPasswordPage />,
            errorElement: <ErrorPage />
          }
        ]
      },
      {
        path: ROUTES.NotFound,
        element: <NotFoundPage />,
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
        errorElement: <ErrorPage />
      },
      {
        path: ROUTES.Any,
        element: <NotFoundPage />
      }
    ]
  }
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
