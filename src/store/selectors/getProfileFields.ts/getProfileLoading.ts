import { RootState } from '../../store';

export const getProfileLoading = (state: RootState) => state.profileReducer.isLoading;
