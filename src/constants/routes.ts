export enum PUBLIC_ROUTES {
  Auth = '/auth',
  LoginPage = '/auth/login',
  BaseRegisterPage = '/auth/register',
  ExtendRegisterPage = '/auth/extend-register',

  Cart = '/cart',
  Base = '/',
  Any = '*',

  NotFoundPage = '/404',
}

export enum PRIVATE_ROUTES {
  Auth = '/auth',
  ExtendRegisterPage = '/auth/extend-register',
  Cart = '/cart',
  Profile = '/profile',
  Base = '/',
  Any = '*',

  NotFoundPage = '/404',
}
