import { getCustomerById } from "../../../api/Customers/GetCustomerInfoActions";
import { AppDispatch } from "../../store";
import { profileSlice } from "../profileSlice";

export const fetchCustomer = (
  customerId: string
) => async (dispatch: AppDispatch) => {
  try {
    dispatch(profileSlice.actions.fetchingCustomer());
    const customer = await getCustomerById(customerId);
    dispatch(profileSlice.actions.fetchingCustomerSuccess(customer));
  } catch (error) {
    dispatch(profileSlice.actions.fetchingCustomerError(error.message));
  }
};
