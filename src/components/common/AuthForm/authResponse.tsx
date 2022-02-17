import { API_LINK } from '../constants';
import { AuthFormParams, User } from '../types';
import { logUser } from '../../../store/actions';
import { getStorageItem } from '../../../utils';

type AuthorizationResponse = {
  user: {
    login: string;
    user: string;
    trackingProducts: string[];
  };
  token: string;
  renewToken: string;
};

export const handleAuthSubmit = async (
  params: AuthFormParams,
  type: string,
  remember: boolean,
): Promise<void> => {
  const url = API_LINK + (type === 'login' ? 'login' : 'registration');
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(params),
  });

  if (response.status !== 200) {
    const errorMsg = type === 'signup' ? 'User already exists!' : 'Wrong username or password!';
    throw new Error(errorMsg);
  }
  const result: AuthorizationResponse = await response.json();

  if (remember) {
    localStorage.setItem('token', JSON.stringify(result.token));
    localStorage.setItem('renewToken', JSON.stringify(result.renewToken));
  } else {
    sessionStorage.setItem('token', JSON.stringify(result.token));
    sessionStorage.setItem('renewToken', JSON.stringify(result.renewToken));
  }

  const parsedToken = getStorageItem('token');
  const parsedRenewToken = getStorageItem('renewToken');

  const userResponse = await fetch(API_LINK + 'auth', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${parsedToken + ' ' + parsedRenewToken}`,
    },
  });
  await userResponse.json().then((data: User) => {
    logUser(data.user.login, data.user.trackingProducts);
  });
};
