import { initialState } from './state';
import { loginUser, setUserLogin, setUserToken, setUserRenewToken } from '../actions';
import { createReducer } from '@reduxjs/toolkit';

export const loginReducer = createReducer(initialState, builder => {
  builder
    .addCase(loginUser, state => {
      state.logged = true;
    })
    .addCase(setUserLogin, (state, action) => {
      state.userLogin = action.payload;
    })
    .addCase(setUserToken, (state, action) => {
      state.userToken = action.payload;
    })
    .addCase(setUserRenewToken, (state, action) => {
      state.userRenewToken = action.payload;
    })
    .addDefaultCase(() => {});
});
