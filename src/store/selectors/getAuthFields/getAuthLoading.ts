import { RootState } from "../../store";

export const getAuthLoading = (state: RootState) => state.authReducer.isLoading;
