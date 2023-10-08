import { ProductPagedQueryResponse } from '@commercetools/platform-sdk';
import { apiRoot } from '../server';

const defaultProducts: ProductPagedQueryResponse = {
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
