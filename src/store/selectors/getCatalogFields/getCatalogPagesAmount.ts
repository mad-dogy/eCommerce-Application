import { RootState } from "../../store";

export const getCatalogPagesAmount = (state: RootState) => state.catalogReducer.pagesAmount;
