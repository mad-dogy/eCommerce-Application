import { Product, ProductProjectionPagedSearchResponse } from '@commercetools/platform-sdk';

import { apiRoot } from '../server';
import { QuerySortOptionValueType } from '../../store/reducers/catalogSlice';

export const getProductById = async (id: string): Promise<Product> => {
  const product = await apiRoot
    .products()
    .withId({ ID: id })
    .get()
    .execute()
    .then(({ body }) => body);

  return product;
};

export interface ProductProjectionSearchProps {
  productsLimit: number;
  productsOffset: number;
  searchText: string;
  sortOption: QuerySortOptionValueType;
  sortOrder: string;
}

const sortOptionMap: Record<QuerySortOptionValueType, string> = {
  createdAt: 'createdAt',
  name: 'name.en-US',
  id: 'id'
};

export const productsProjectionSearch = async (
  props: ProductProjectionSearchProps
): Promise<ProductProjectionPagedSearchResponse> => {
  const productsProjectionSearchResponse = await apiRoot
    .productProjections()
    .search()
    .get({
      queryArgs: {
        fuzzy: true,
        limit: props.productsLimit,
        offset: props.productsOffset,
        sort: `${sortOptionMap[props.sortOption]} ${props.sortOrder}`,
        'text.en-US': props.searchText
      }
    })
    .execute()
    .then(({ body }) => body);
  return productsProjectionSearchResponse;
};
