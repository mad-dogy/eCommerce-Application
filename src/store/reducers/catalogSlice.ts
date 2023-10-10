import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
};

export const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    increment(state, action: PayloadAction<number>) {
      state.count += action.payload;
    },
  },
});

export default catalogSlice.reducer;
