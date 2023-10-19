import { RootState } from "../../store";

export const getCatalogProducts = (state: RootState) => state.catalogReducer.products;
