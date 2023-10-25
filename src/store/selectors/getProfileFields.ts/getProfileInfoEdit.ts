import { RootState } from '../../store';

export const getProfileInfoEdit = (state: RootState) => state.profileReducer.isInfoEdit;
