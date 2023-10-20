import { Customer } from '@commercetools/platform-sdk';
import { changeCustomerPassword, updateCustomerInfo } from '../../../api/Customers/CustomerUpdateActions';
import { getCustomerById } from '../../../api/Customers/GetCustomerInfoActions';
import { CustomerPasswordUpdateInfo, CustomerUpdateInfo } from '../../../entities/CustomerTypes/CustomerUpdateInfo.type';
import { AppDispatch } from '../../store';
import { profileSlice } from '../profileSlice';

export const fetchCustomer = (
  customerId: string,
) => async (dispatch: AppDispatch) => {
  try {
    dispatch(profileSlice.actions.fetchingCustomer());
    const customer = await getCustomerById(customerId);
    dispatch(profileSlice.actions.fetchingCustomerSuccess(customer));
  } catch (error) {
    dispatch(profileSlice.actions.fetchingCustomerError(error.message));
  }
};

export const fetchUpdateCustomer = (
  customerId: string,
  data: CustomerUpdateInfo,
) => async (dispatch: AppDispatch) => {
  try {
    dispatch(profileSlice.actions.fetchingCustomerUpdate());
    await updateCustomerInfo(customerId, data);
    dispatch(profileSlice.actions.fetchingCustomerUpdateSuccess());
  } catch (error) {
    dispatch(profileSlice.actions.fetchingCustomerUpdateError(error.message));
  }
};

export const fetchChangeCustomerPassword = (
  customer: Customer,
  data: CustomerPasswordUpdateInfo,
) => async (dispatch: AppDispatch) => {
  try {
    dispatch(profileSlice.actions.fetchingCustomerUpdate());
    await changeCustomerPassword(customer, data);
    dispatch(profileSlice.actions.fetchingCustomerUpdateSuccess());
  } catch (error) {
    dispatch(profileSlice.actions.fetchingCustomerUpdateError(error.message));
  }
};
