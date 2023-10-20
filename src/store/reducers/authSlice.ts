import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SignInResponseType } from '../../api/ClientMe';
import { SignUpResponseType } from '../../api/Customers/Authorization';
import { LOCAL_STORAGE_KEYS } from '../../constants/constants';

export interface AuthState {
  isAuth: boolean | undefined;
  isLoading: boolean;
  error: string;
}

const initialState: AuthState = {
  isAuth: undefined,
  isLoading: false,
  error: '',
};

export const authSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    setAuth(state, action: PayloadAction<boolean>) {
      state.isAuth = action.payload;
    },

    fetchingSignIn(state) {
      state.isLoading = true;
    },
    fetchingSignInSuccess(state, action: PayloadAction<SignInResponseType>) {
      state.isAuth = true;
      state.isLoading = false;
      state.error = '';

      localStorage.setItem(LOCAL_STORAGE_KEYS.customerId, action.payload);
    },
    fetchingSignInError(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.isLoading = false;

      alert(state.error);
    },

    fetchingSignUp(state) {
      state.isLoading = true;
    },
    fetchingSignUpSuccess(state, action: PayloadAction<SignUpResponseType>) {
      state.isAuth = true;
      state.isLoading = false;
      state.error = '';

      localStorage.setItem(LOCAL_STORAGE_KEYS.customerId, action.payload);
    },
    fetchingSignUpError(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.isLoading = false;

      alert(state.error);
    },

    fetchingDeleteAccount(state) {
      state.isLoading = true;
    },
    fetchingDeleteAccountSuccess(state) {
      state.isAuth = false;
      state.isLoading = false;
      state.error = '';

      localStorage.removeItem(LOCAL_STORAGE_KEYS.customerId);
    },
    fetchingDeleteAccountError(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.isLoading = false;

      alert(state.error);
    },
  },
});

export const authReducer = authSlice.reducer;
