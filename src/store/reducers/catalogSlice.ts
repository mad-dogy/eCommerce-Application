import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductProjection } from '@commercetools/platform-sdk';

import { fetchProducts } from './actionCreators/catalogActionCreators';

export type QuerySortOptionValueType = 'id' | 'name' | 'createdAt';
export type QuerySortOptionNameType = 'ID' | 'Name' | 'Date of creation';

export type QuerySortOrderValueType = 'asc' | 'desc';
export type QuerySortOrderNameType = 'Ascending' | 'Descending';

interface ProductState {
  products: ProductProjection[];
  total?: number;
  limit: number;

  pagesAmount?: number;
  currentPageNumber: number;

  queryString: string;
  querySortOption: QuerySortOptionValueType;
  querySortOrder: QuerySortOrderValueType;

  isLoading?: boolean;
  error?: string;
}

const initialState: ProductState = {
  products: [],

  limit: 12,
  currentPageNumber: 1,

  queryString: '',
  querySortOption: 'id',
  querySortOrder: 'asc'
};

export const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    setQueryString(state, action: PayloadAction<string>) {
      state.queryString = action.payload;
    },
    setQuerySortOption(state, action: PayloadAction<QuerySortOptionValueType>) {
      state.querySortOption = action.payload;
    },
    setQuerySortOrder(state, action: PayloadAction<QuerySortOrderValueType>) {
      state.querySortOrder = action.payload;
    },
    setLimit(state, action: PayloadAction<number>) {
      state.limit = action.payload;
      state.pagesAmount = Math.ceil(state.total / state.limit);
      state.currentPageNumber = 1;
    },
    setCurrentPageNumber(state, action: PayloadAction<number>) {
      state.currentPageNumber = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload.results;

        state.total = action.payload.total;
        state.limit = action.payload.limit;

        state.pagesAmount = Math.ceil(state.total / state.limit);

        state.isLoading = false;
        state.error = '';
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  }
});

export const catalogReducer = catalogSlice.reducer;
