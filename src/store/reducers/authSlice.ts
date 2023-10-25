import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { SignInResponseType } from '../../api/ClientMe';
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
  extraReducers: {
    [fetchSignIn.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchSignIn.fulfilled.type]: (state, action: PayloadAction<SignInResponseType>) => {
      state.isAuth = true;
      state.isLoading = false;
      state.error = undefined;

      localStorage.setItem(LOCAL_STORAGE_KEYS.customerId, action.payload);
    },
    [fetchSignIn.rejected.type]: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    [fetchDeleteCustomerAccount.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchDeleteCustomerAccount.fulfilled.type]: (state) => {
      state.isAuth = false;
      state.isLoading = false;
      state.error = undefined;

      localStorage.removeItem(LOCAL_STORAGE_KEYS.customerId);
    },
    [fetchDeleteCustomerAccount.rejected.type]: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.isLoading = false;
    }
  }
});

export const authReducer = authSlice.reducer;
