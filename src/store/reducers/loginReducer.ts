import { initialState } from './state';
import { loginUser, setUserLogin, setUserToken, setUserRenewToken } from '../actions';
import { createReducer } from '@reduxjs/toolkit';
import { logoutUser } from '../actions/loginActions';

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
    .addCase(logoutUser, state => {
      state.logged = false;
      state.userLogin = '';
      state.userToken = '';
      state.userRenewToken = '';
    })
    .addDefaultCase(() => {});
});
