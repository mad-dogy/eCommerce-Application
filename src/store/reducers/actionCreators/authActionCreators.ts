import { Customer } from '@commercetools/platform-sdk';
import { SignInProps, signIn } from '../../../api/ClientMe';
import { SignUpProps, signUp } from '../../../api/Customers/Authorization';
import { AppDispatch } from '../../store';
import { authSlice } from '../authSlice';
import { deleteCustomer } from '../../../api/Customers/CustomerUpdateActions';

export const fetchSignIn = (data: SignInProps) => async (dispatch: AppDispatch) => {
  const {
    fetchingSignIn,
    fetchingSignInSuccess,
    fetchingSignInError,
  } = authSlice.actions;
  try {
    dispatch(fetchingSignIn());
    const customerId = await signIn(data);
    dispatch(fetchingSignInSuccess(customerId));
  } catch (error) {
    dispatch(fetchingSignInError(error.message));
  }
};

export const fetchSignUp = (data: SignUpProps) => async (dispatch: AppDispatch) => {
  const {
    fetchingSignUp,
    fetchingSignUpSuccess,
    fetchingSignUpError,
  } = authSlice.actions;

  try {
    dispatch(fetchingSignUp());
    const customerId = await signUp(data);
    dispatch(fetchingSignUpSuccess(customerId));
  } catch (error) {
    dispatch(fetchingSignUpError(error.message));
  }
};

export const fetchDeleteCustomerAccount = (
  customer: Customer,
) => async (dispatch: AppDispatch) => {
  const {
    fetchingDeleteAccount,
    fetchingDeleteAccountSuccess,
    fetchingDeleteAccountError,
  } = authSlice.actions;

  try {
    dispatch(fetchingDeleteAccount());
    const response = await deleteCustomer(customer);
    dispatch(fetchingDeleteAccountSuccess());
  } catch (error) {
    dispatch(fetchingDeleteAccountError(error.message));
  }
};
