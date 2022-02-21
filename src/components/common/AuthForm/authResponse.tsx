import { API_LINK } from '../constants';
import { AuthFormParams, User } from '../types';
import { logUser } from '../../../store/actions';
import { fetchUser, getStorageItem } from '../../../utils';
import { store } from '../../../store/store';
import { toggleSubscribe } from '../../../store/slices/loginSlice';

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

  if (!response.ok) {
    throw new Error(`${await response.text()}`);
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
  if (parsedToken && parsedRenewToken) {
    fetchUser(parsedToken, parsedRenewToken).then((data: User) => {
      store.dispatch(toggleSubscribe(data.user.isNotificationOn));
      logUser(data.user.login, data.user.trackingProducts);
    });
  }
};
