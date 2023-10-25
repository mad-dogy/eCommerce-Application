import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { SignUpResponseType } from '../../api/Customers/Authorization';
import { LOCAL_STORAGE_KEYS } from '../../constants/constants';

import { fetchSignIn, fetchDeleteCustomerAccount } from './actionCreators/authActionCreators';

export interface AuthState {
  isAuth?: boolean;
  isLoading?: boolean;
  error?: string;
}

const initialState: AuthState = {};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    initAuth(state) {
      const customerId = localStorage.getItem(LOCAL_STORAGE_KEYS.customerId);
      if (customerId) {
        state.isAuth = true;
      } else {
        state.isAuth = false;
      }
    },

    setAuth(state, action: PayloadAction<boolean>) {
      state.isAuth = action.payload;
    },

    fetchingSignUp(state) {
      state.isLoading = true;
    },
    fetchingSignUpSuccess(state, action: PayloadAction<SignUpResponseType>) {
      state.isAuth = true;
      state.isLoading = false;
      state.error = undefined;

      localStorage.setItem(LOCAL_STORAGE_KEYS.customerId, action.payload);
    },
    fetchingSignUpError(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.isLoading = false;
    },

    logout(state) {
      state.isAuth = false;
      localStorage.removeItem(LOCAL_STORAGE_KEYS.customerId);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSignIn.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchSignIn.fulfilled, (state, action) => {
        state.isAuth = true;
        state.isLoading = false;
        state.error = undefined;

        localStorage.setItem(LOCAL_STORAGE_KEYS.customerId, action.payload);
      })
      .addCase(fetchSignIn.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      })

      .addCase(fetchDeleteCustomerAccount.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchDeleteCustomerAccount.fulfilled, (state) => {
        state.isAuth = false;
        state.isLoading = false;
        state.error = undefined;

        localStorage.removeItem(LOCAL_STORAGE_KEYS.customerId);
      })
      .addCase(fetchDeleteCustomerAccount.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  }
});

export const authReducer = authSlice.reducer;
