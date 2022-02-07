const initialState = {
  logged: true,
  login: 'Login',
  bearerToken:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImxvZ2luIjoiYSIsInBhc3N3b3JkIjoiJDJiJDEwJGU4Mk41N0hzQ2k5bHlsVER2d2ZpaC5mOFQvSHVSeTh3dzVZNjkzWUNyUzZWZ2NXa2ZFZTRPIiwidHJhY2tpbmdQcm9kdWN0cyI6W10sIl9pZCI6IjYxZjdmY2Q2ODAzYWY2Y2UzMjQ3OTQwNyJ9LCJpYXQiOjE2NDM2NDIwNzAsImV4cCI6MTY0NDUwNjA3MH0.tniARbyAPUIGKxG-QFgFMjqNvLpaECsTUeFawHj5lmA eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImxvZ2luIjoiYSIsInBhc3N3b3JkIjoiJDJiJDEwJGU4Mk41N0hzQ2k5bHlsVER2d2ZpaC5mOFQvSHVSeTh3dzVZNjkzWUNyUzZWZ2NXa2ZFZTRPIiwidHJhY2tpbmdQcm9kdWN0cyI6W10sIl9pZCI6IjYxZjdmY2Q2ODAzYWY2Y2UzMjQ3OTQwNyJ9LCJpYXQiOjE2NDM2NDIwNzAsImV4cCI6MTY0NDUwNjA3MH0.pewfnrX3r2oqtZ4bKEF5O0biiBdyLYvyLrzdiA7KWJg',
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
