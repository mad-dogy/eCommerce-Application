const getRouteMain = () => '/';
const getRouteAuth = () => '/auth';
const getRouteLogin = () => '/auth/login';
const getRouteBaseRegister = () => '/auth/register';
const getRouteExtendRegister = () => '/auth/extend-register';
const getRouteCart = () => '/cart';
const getRouteAbout = () => '/about';
const getRouteProfile = () => '/profile';
const getRouteCatalog = () => '/catalog';
const getRouteCatalogProduct = (id: string) => `/catalog/${id}`;
const getRouteNotFound = () => '/404';
const getRouteAny = () => '*';

export const ROUTES = {
  main: getRouteMain,
  auth: getRouteAuth,
  login: getRouteLogin,
  baseRegister: getRouteBaseRegister,
  extendRegister: getRouteExtendRegister,
  cart: getRouteCart,
  about: getRouteAbout,
  profile: getRouteProfile,
  catalog: getRouteCatalog,
  catalogProduct: getRouteCatalogProduct,
  notFound: getRouteNotFound,
  any: getRouteAny
};
