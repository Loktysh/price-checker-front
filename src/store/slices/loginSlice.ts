import { createSlice } from '@reduxjs/toolkit';

type LoginState = {
  logged: boolean;
  userLogin: string;
  userToken: string;
  userRenewToken: string;
};

const initialState: LoginState = {
  logged: false,
  userLogin: '',
  userToken: '',
  userRenewToken: '',
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    loginUser: state => {
      state.logged = true;
    },
    logoutUser: state => {
      state.logged = false;
    },
    setUserLogin: (state, action) => {
      state.userLogin = action.payload;
    },
    setUserToken: (state, action) => {
      state.userToken = action.payload;
    },
    setUserRenewToken: (state, action) => {
      state.userRenewToken = action.payload;
    },
  },
});

export const { loginUser, logoutUser, setUserLogin, setUserToken, setUserRenewToken } =
  loginSlice.actions;

export default loginSlice.reducer;
