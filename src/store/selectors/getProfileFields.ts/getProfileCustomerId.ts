import { RootState } from '../../store';

export const getProfileCustomerId = (state: RootState) => state.profileReducer.customerId;
