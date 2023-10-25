import { RootState } from '../../store';

export const getCatalogLoading = (state: RootState) => state.catalogReducer.isLoading;
