export const loginUser = () => {
  return {
    type: 'LOGIN',
  };
};

export const setLogin = value => {
  return {
    type: 'SET_LOGIN',
    payload: value,
  };
};
