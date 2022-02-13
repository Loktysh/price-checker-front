import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { loginReducer } from './reducers/loginReducer';
import { initialState } from './reducers/state';
import productReducer from './slices/productsSlice';

const rootReducer = combineReducers({
  login: loginReducer,
  tracking: productReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
  preloadedState: initialState,
});

export type RootState = ReturnType<typeof rootReducer>;
