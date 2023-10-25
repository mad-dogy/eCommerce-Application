import { RootState } from '../../store';

export const getProfilePasswordEdit = (state: RootState) => state.profileReducer.isPasswordEdit;
