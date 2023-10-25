import { Customer } from '@commercetools/platform-sdk';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { SignInProps, signIn } from '../../../api/ClientMe';
import { SignUpProps, signUp } from '../../../api/Customers/Authorization';
import { AppDispatch } from '../../store';
import { authSlice } from '../authSlice';
import { deleteCustomer } from '../../../api/Customers/CustomerUpdateActions';

export const fetchSignIn = createAsyncThunk<string, SignInProps, { rejectValue: string }>(
  'auth/fetchSignIn',
  async (data, thunkApi) => {
    const { rejectWithValue } = thunkApi;

    try {
      const customerId = await signIn(data);
      return customerId;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue('Smth went wrong with sign in response');
    }
  }
);

export const fetchSignUp = (data: SignUpProps) => async (dispatch: AppDispatch) => {
  const { fetchingSignUp, fetchingSignUpSuccess, fetchingSignUpError } = authSlice.actions;

  try {
    dispatch(fetchingSignUp());

    const customerId = await signUp(data);

    dispatch(fetchingSignUpSuccess(customerId));
  } catch (error) {
    dispatch(fetchingSignUpError(error.message));
    throw error;
  }
};

export const fetchDeleteCustomerAccount = createAsyncThunk<void, Customer, { rejectValue: string }>(
  'auth/fetchDeleteAccount',
  async (customer, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      await deleteCustomer(customer);
      return;
    } catch (error) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue('Smth went wrong with deleting account response');
    }
  }
);
