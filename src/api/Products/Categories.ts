import { Category, CategoryPagedQueryResponse } from '@commercetools/platform-sdk';
import { apiRoot } from '../server';

const defaultCategories: CategoryPagedQueryResponse = {
  limit: 20,
  offset: 0,
  count: 0,
  total: 0,
  results: [],
};

export const getCategories = async (): Promise<CategoryPagedQueryResponse> => {
  const categories = await apiRoot
    .categories()
    .get()
    .execute()
    .then(({ body }) => body)
    .catch(error => alert(error));

  if (categories) return categories;
  return defaultCategories;
};

export const getCategoryById = async (id: string) => {
  const category = await apiRoot
    .categories()
    .withId({ ID: id })
    .get()
    .execute()
    .then(({ body }) => body)
    .catch(error => alert(error));

  return category;
};
