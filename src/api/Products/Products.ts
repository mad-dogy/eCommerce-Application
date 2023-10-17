import { Product, ProductProjectionPagedSearchResponse } from '@commercetools/platform-sdk';
import { apiRoot } from '../server';

export const defaultProductsResponse: ProductProjectionPagedSearchResponse = {
  limit: 12,
  offset: 0,
  count: 0,
  total: 0,
  facets: {},
  results: [],
};

//какие запросы оставить? всегда отправлять products-projection?

export const getProductById = async (id: string): Promise<Product> => {
  const product = await apiRoot
    .products()
    .withId({ ID: id })
    .get()
    .execute()
    .then(({ body }) => body);

  return product;
};

export const productsProjectionSearch = async (
  productsLimit: number,
  productsOffset: number,
  searchText: string,
  sortOption: string,
  sortOrder: string,
): Promise<ProductProjectionPagedSearchResponse> => {
  switch (sortOption) {
    case 'name': sortOption = 'name.en-US'; break;
    case 'createdAt': sortOption = 'createdAt'; break;
    default: sortOption = 'id';
  }

  const productsProjectionSearchResponse = await apiRoot
    .productProjections()
    .search()
    .get({queryArgs: {
      fuzzy: true,
      limit: productsLimit,
      offset: productsOffset,
      sort: `${sortOption} ${sortOrder}`,
      'text.en-US': searchText
    }})
    .execute()
    .then(({body}) => body);
  return productsProjectionSearchResponse;
}
