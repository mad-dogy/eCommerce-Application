import { RootState } from '../../store';

export const getCatalogQueryString = (state: RootState) => state.catalogReducer.queryString;

export const getCatalogSortOption = (state: RootState) => state.catalogReducer.querySortOption;

export const getCatalogSortOrder = (state: RootState) => state.catalogReducer.querySortOrder;
