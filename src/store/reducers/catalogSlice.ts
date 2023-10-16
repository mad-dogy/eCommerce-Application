import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product, ProductPagedQueryResponse } from '@commercetools/platform-sdk';
import { defaultProductsResponse } from '../../api/Products/Products';

export type QuerySortOptionType = 'id' | 'name' | 'createdAt';
export type QuerySortOrderType = 'asc' | 'desc';

interface ProductState {
  products: Product[];
  searchedProducts: Product[];
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
  searchedProducts: defaultProductsResponse.results,
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
    productsFetching(state) {
      state.isLoading = true;
    },
    productsFetchingSuccess(state, action: PayloadAction<ProductPagedQueryResponse>) {
      state.products = action.payload.results;
      state.searchedProducts = action.payload.results;

      state.total = action.payload.total;
      state.limit = action.payload.limit;

      state.pagesAmount = Math.ceil(state.total / state.limit);

      state.isLoading = false;
      state.error = '';
    },
    productsFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },

    searchProducts(state, action: PayloadAction<string>) {
      if (state.products) {
        state.searchedProducts = state.products.filter(product => product.masterData.current.name['en-US'].toLowerCase().includes(action.payload.toLowerCase()));
      }
      if (!action.payload) {
        state.searchedProducts = state.products;
      }
    },

    sortProductsFetching(state) {
      state.isLoading = true;
    },
    sortProductsFetchingSuccess(state, action: PayloadAction<ProductPagedQueryResponse>) {
      state.products = action.payload.results;
      state.searchedProducts = action.payload.results;

      state.total = action.payload.total;
      state.limit = action.payload.limit;

      state.pagesAmount = Math.ceil(state.total / state.limit);

      state.isLoading = false;
      state.error = '';
    },
    sortProductsFetchingError(state, action: PayloadAction<string>) {
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
