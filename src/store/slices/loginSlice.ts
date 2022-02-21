import { createSlice } from '@reduxjs/toolkit';

type LoginState = {
  logged: boolean;
  isSubscribed: boolean;
  userLogin: string;
  userToken: string;
  userRenewToken: string;
};

const initialState: LoginState = {
  logged: false,
  isSubscribed: false,
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
    toggleSubscribe: (state, action) => {
      state.isSubscribed = action.payload;
    },
  },
});

export const { loginUser, logoutUser, setUserLogin, toggleSubscribe } = loginSlice.actions;

export default loginSlice.reducer;
