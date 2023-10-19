import { RootState } from "../../store";

export const getAuthError = (state: RootState) => state.authReducer.error;
