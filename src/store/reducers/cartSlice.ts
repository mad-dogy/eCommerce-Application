import { ProductProjection } from '@commercetools/platform-sdk';
import { createSlice } from '@reduxjs/toolkit';

interface CartState {
  productsIds: string[];
  isLoading: boolean;
  error: string;
}

const initialState: CartState = {
  productsIds: [],
  isLoading: false,
  error: ''
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {}
});

export const cartReducer = cartSlice.reducer;
