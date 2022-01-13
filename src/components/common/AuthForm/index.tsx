import React from 'react';

const AuthForm = () => {
  return (
    <form>
      <label htmlFor='login'>Login: </label>
      <input id='login' type='text' placeholder='login' />

      <label htmlFor='password'>Password: </label>
      <input id='password' type='password' placeholder='password' />
    </form>
  );
};

export default AuthForm;
