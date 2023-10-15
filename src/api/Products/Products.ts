import { Product, ProductPagedQueryResponse } from '@commercetools/platform-sdk';
import { apiRoot } from '../server';

export const defaultProductsResponse: ProductPagedQueryResponse = {
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
  return defaultProductsResponse;
};

export const querySortProducts = async (
  sortOption: string,
  sortOrder: string,
): Promise<ProductPagedQueryResponse> => {
  switch (sortOption) {
    case 'name': sortOption = 'masterData.current.name.en-US'; break;
    case 'createdAt': sortOption = 'createdAt'; break;
    default: sortOption = 'id';
  }

  sortOrder = sortOrder.toLowerCase();

  const productsResponse = await apiRoot
    .products()
    .get({
      queryArgs: {
        limit: 20,
        sort: `${sortOption} ${sortOrder}`,
      },
    })
    .execute()
    .then(({ body }) => body)
    .catch((error) => alert(error));
  if (productsResponse) return productsResponse;
  return defaultProductsResponse;
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
