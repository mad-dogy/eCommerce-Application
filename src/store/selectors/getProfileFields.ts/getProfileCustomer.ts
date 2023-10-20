import { RootState } from "../../store";

export const getProfileCustomer = (state: RootState) => state.profileReducer.customer;
