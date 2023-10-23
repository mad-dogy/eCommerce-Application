import { RootState } from '../../store';

export const getCatalogError = (state: RootState) => state.catalogReducer.error;
