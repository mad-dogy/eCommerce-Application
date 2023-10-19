import { RootState } from "../../store";

export const getCatalogLimit = (state: RootState) => state.catalogReducer.limit;
