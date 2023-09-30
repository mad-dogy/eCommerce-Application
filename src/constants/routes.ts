export enum PUBLIC_ROUTES {
  Auth = '/auth',
  LoginPage = '/auth/login',
  BaseRegisterPage = '/auth/register',

  Cart = '/cart',
  About = '/about',
  Catalog = '/catalog',

  Base = '/',
  Any = '*',

  NotFoundPage = '/404',
}

export enum PRIVATE_ROUTES {
  Auth = '/auth',
  ExtendRegisterPage = '/auth/extend-register',

  Cart = '/cart',
  Profile = '/profile',
  About = '/about',
  Catalog = '/catalog',

  Base = '/',
  Any = '*',

  NotFoundPage = '/404',
}
