import { QuerySortOptionType, QuerySortOrderType } from './types';

export const sortOptionSelectItems: QuerySortOptionType[] = [
  { name: 'ID', value: 'id' },
  { name: 'Name', value: 'name' },
  { name: 'Date of creation', value: 'createdAt' }
];

export const sortOrderSelectItems: QuerySortOrderType[] = [
  { name: 'Ascending', value: 'asc' },
  { name: 'Descending', value: 'desc' }
];
