import { RootState } from '../../store';

export const getCatalogCurrentPageNumber = (state: RootState) =>
  state.catalogReducer.currentPageNumber;
