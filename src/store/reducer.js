const initialState = {
  logged: true,
  login: 'Login',
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, logged: true };
    case 'SET_LOGIN':
      return { ...state, login: action.payload };
    default:
      return state;
  }
};

export default loginReducer;
