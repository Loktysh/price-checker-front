import { API_LINK } from '../constants';
import { AuthFormParams } from '../types';

export const handleAuthSubmit = async (params: AuthFormParams, type: string) => {
  const url = API_LINK + (type === 'login' ? 'login' : 'registration');
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(params),
  });

  const result = await response.json();

  localStorage.setItem('token', JSON.stringify(result.token));
  localStorage.setItem('renewToken', JSON.stringify(result.renewToken));
};
