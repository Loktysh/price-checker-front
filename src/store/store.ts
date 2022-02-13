import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import productReducer from './slices/productsSlice';
import loginReducer from './slices/loginSlice';

const rootReducer = combineReducers({
  login: loginReducer,
  tracking: productReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof rootReducer>;
