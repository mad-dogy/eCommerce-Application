import { RootState } from "../../store";

export const getProfileError= (state: RootState) => state.profileReducer.error;
