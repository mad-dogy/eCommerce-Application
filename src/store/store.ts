import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { catalogReducer } from './reducers/catalogSlice';
import { profileReducer } from './reducers/profileSlice';
import { authReducer } from './reducers/authSlice';
import { cartReducer } from './reducers/cartSlice';

const rootReducer = combineReducers({
  authReducer,
  profileReducer,
  catalogReducer,
  cartReducer,
});

export const setupStore = () => configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
