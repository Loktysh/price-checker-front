import { API_LINK } from '../constants';
import { AuthFormParams } from '../types';

type AuthorizationResponse = {
  user: {
    login: string;
    user: string;
  };
  token: string;
  renewToken: string;
};

export const handleAuthSubmit = async (params: AuthFormParams, type: string): Promise<void> => {
  const url = API_LINK + (type === 'login' ? 'login' : 'registration');
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(params),
  });

  const result: AuthorizationResponse = await response.json();
  console.log(result);
  const savedToken: string | null = localStorage.getItem('token');
  const savedRenewToken: string | null = localStorage.getItem('renewToken');

  if (!savedToken || savedToken !== result.token) {
    localStorage.setItem('token', JSON.stringify(result.token));
  }

  if (!savedRenewToken || savedRenewToken !== result.renewToken) {
    localStorage.setItem('renewToken', JSON.stringify(result.renewToken));
  }
};
