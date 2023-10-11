import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductPagedQueryResponse } from '@commercetools/platform-sdk';
import { defaultProducts } from '../../api/Products/Products';

interface ProductState {
  products: ProductPagedQueryResponse;
  searchedProducts: ProductPagedQueryResponse;
  isLoading: boolean;
  error: string;
}

const initialState: ProductState = {
  products: defaultProducts,
  searchedProducts: defaultProducts,
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
      state.searchedProducts = action.payload;

      state.isLoading = false;
      state.error = '';
    },
    productsFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },

    searchProducts(state, action: PayloadAction<string>) {
      if (state.products) {
        const productList = state.products.results;
        state.searchedProducts.results = productList.filter(product => product.masterData.current.name['en-US'].toLowerCase().includes(action.payload.toLowerCase()));
      }
      if (!action.payload) {
        state.searchedProducts = state.products;
      }
    },
  },
});

export const catalogReducer = catalogSlice.reducer;
