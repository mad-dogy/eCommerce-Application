import { Product, ProductPagedQueryResponse } from '@commercetools/platform-sdk';
import { apiRoot } from '../server';

export const defaultProducts: ProductPagedQueryResponse = {
  limit: 20,
  offset: 0,
  count: 0,
  total: 0,
  results: [],
};

export const queryProducts = async (): Promise<ProductPagedQueryResponse> => {
  const products = await apiRoot
    .products()
    .get()
    .execute()
    .then(({ body }) => body)
    .catch((error) => alert(error));
  if (products) return products;
  return defaultProducts;
};

export const querySortProducts = async (
  sortOption: string,
  sortOrder: string,
): Promise<ProductPagedQueryResponse> => {
  sortOrder = sortOrder.toLowerCase();

  const products = await apiRoot
    .products()
    .get({ queryArgs: { sort: `${sortOption} ${sortOrder}` } })
    .execute()
    .then(({ body }) => body)
    .catch((error) => alert(error));
  if (products) return products;
  return defaultProducts;
};

export const getProductById = async (id: string): Promise<Product> => {
  const product = await apiRoot
    .products()
    .withId({ ID: id })
    .get()
    .execute()
    .then(({ body }) => body);

  return product;
};
