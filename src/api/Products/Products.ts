import { ProductPagedQueryResponse } from '@commercetools/platform-sdk';
import { apiRoot } from '../server';

export const queryProducts = async () => {
  const products: ProductPagedQueryResponse = await apiRoot
    .products()
    .get()
    .execute()
    .then(({ body }) => body)
    .catch((error) => alert(error));
  return products;
};
