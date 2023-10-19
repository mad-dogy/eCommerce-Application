import { RootState } from "../../store";

export const getAuthState = (state: RootState) => state.authReducer.isAuth;
