import { createAction } from '@reduxjs/toolkit';

export const loginUser = createAction('LOGIN_USER');

export const setUserLogin = createAction<string>('SET_LOGIN');

export const setUserToken = createAction<string>('SET_USER_TOKEN');

export const setUserRenewToken = createAction<string>('SET_RENEW_TOKEN');
