import { ProductProjection } from '@commercetools/platform-sdk';
import { createSlice } from '@reduxjs/toolkit';

interface CartState {
  products: ProductProjection[];
  isLoading: boolean;
  error: string;
}

const initialState: CartState = {
  products: [],
  isLoading: false,
  error: '',
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {

  },
});

export const cartReducer = cartSlice.reducer;
