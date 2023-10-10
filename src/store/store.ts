import { combineReducers, configureStore } from '@reduxjs/toolkit';
import catalogReducer from './reducers/catalogSlice';

const rootReducer = combineReducers({
  catalogReducer,
});

export const setupStore = () => configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
