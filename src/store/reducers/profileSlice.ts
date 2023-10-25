import { Customer } from '@commercetools/platform-sdk';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { LOCAL_STORAGE_KEYS } from '../../constants/constants';

interface ProfileState {
  customerId?: string;
  customer?: Customer;

  isInfoEdit: boolean;
  isPasswordEdit: boolean;

  isLoading?: boolean;
  error?: string;
}

const initialState: ProfileState = {
  isInfoEdit: false,
  isPasswordEdit: false
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    initProfile(state) {
      const customerId = localStorage.getItem(LOCAL_STORAGE_KEYS.customerId);
      if (customerId) {
        state.customerId = customerId;
      }
    },

    setCustomerId(state, action: PayloadAction<string>) {
      state.customerId = action.payload;
    },
    setInfoEdit(state, action: PayloadAction<boolean>) {
      state.isInfoEdit = action.payload;
    },
    setPasswordEdit(state, action: PayloadAction<boolean>) {
      state.isPasswordEdit = action.payload;
    },

    fetchingCustomer(state) {
      state.isLoading = true;
    },
    fetchingCustomerSuccess(state, action: PayloadAction<Customer>) {
      state.customer = action.payload;

      state.isLoading = false;
      state.error = undefined;
    },
    fetchingCustomerError(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.isLoading = false;
    },

    fetchingCustomerUpdate(state) {
      state.isLoading = true;
    },
    fetchingCustomerUpdateSuccess(state) {
      state.isInfoEdit = false;
      state.isPasswordEdit = false;
      state.isLoading = false;
      state.error = undefined;
    },
    fetchingCustomerUpdateError(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.isLoading = false;
    }
  }
});

export const profileReducer = profileSlice.reducer;
