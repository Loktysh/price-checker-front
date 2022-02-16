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
  },
});

export const { loginUser, logoutUser, setUserLogin } = loginSlice.actions;

export default loginSlice.reducer;
