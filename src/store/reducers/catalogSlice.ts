import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductProjection, ProductProjectionPagedSearchResponse } from '@commercetools/platform-sdk';
import { defaultProductsResponse } from '../../api/Products/Products';

export type QuerySortOptionType = 'id' | 'name' | 'createdAt';
export type QuerySortOrderType = 'asc' | 'desc';

interface ProductState {
  products: ProductProjection[];
  total: number;
  limit: number;

  pagesAmount: number;
  currentPageNumber: number;

  queryString: string;
  querySortOption: QuerySortOptionType;
  querySortOrder: QuerySortOrderType;

  isLoading: boolean;
  error: string;
}

const initialState: ProductState = {
  products: defaultProductsResponse.results,
  total: defaultProductsResponse.total,
  limit: defaultProductsResponse.limit,

  pagesAmount: 1,
  currentPageNumber: 1,

  queryString: '',
  querySortOption: 'id',
  querySortOrder: 'asc',

  isLoading: false,
  error: '',
};

export const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    productsFetchingWithSearch(state) {
      state.isLoading = true;
    },
    productsFetchingWithSearchSuccess(state, action: PayloadAction<ProductProjectionPagedSearchResponse>) {
      state.products = action.payload.results;

      state.total = action.payload.total;
      state.limit = action.payload.limit;

      state.pagesAmount = Math.ceil(state.total / state.limit);

      state.isLoading = false;
      state.error = '';
    },
    productsFetchingWithSearchError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },

    setQueryString(state, action: PayloadAction<string>) {
      state.queryString = action.payload;
    },
    setQuerySortOption(state, action: PayloadAction<QuerySortOptionType>) {
      state.querySortOption = action.payload;
    },
    setQuerySortOrder(state, action: PayloadAction<QuerySortOrderType>) {
      state.querySortOrder = action.payload;
    },
    setLimit(state, action: PayloadAction<number>) {
      state.limit = action.payload;
      state.pagesAmount = Math.ceil(state.total / state.limit);
    },
    setCurrentPageNumber(state, action: PayloadAction<number>) {
      state.currentPageNumber = action.payload;
    },
  },
});

export const catalogReducer = catalogSlice.reducer;
