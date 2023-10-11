import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductPagedQueryResponse } from '@commercetools/platform-sdk';
import { defaultProducts } from '../../api/Products/Products';

interface ProductState {
  products: ProductPagedQueryResponse;
  isLoading: boolean;
  error: string;
}

const initialState: ProductState = {
  products: defaultProducts,
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
      state.products = action.payload;
      state.isLoading = false;
      state.error = '';
    },
    productsFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const catalogReducer = catalogSlice.reducer;
