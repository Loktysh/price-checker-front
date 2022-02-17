import { API_LINK } from '../components/common/constants';
import { ItemsData, User } from '../components/common/types';

export const fetchProducts = async (query: string): Promise<ItemsData> => {
  const res: Response = await fetch(query);
  if (!res.ok) {
    throw new Error('Sorry, unable to fetch info. Status: ' + res.status);
  }
  const data: ItemsData = await res.json();
  return data;
};

export const fetchUser = async (token: string, renewToken: string): Promise<User> => {
  const URL = API_LINK + 'auth';
  const response: Response = await fetch(URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token + ' ' + renewToken}`,
    },
  });
  const result: User = await response.json();
  return result;
};

export const fetchTrack = async (
  token: string,
  renewToken: string,
  action: string,
  id: string | number,
) => {
  const params = { product: id, action: action };
  const URL = API_LINK + 'products/track';
  const response: Response = await fetch(URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      Authorization: `Bearer ${token + ' ' + renewToken}`,
    },
    body: JSON.stringify(params),
  });

  const result = await response.json();
  return result;
};

export const getStorageItem = (key: string): string | null => {
  const localItem = JSON.parse(localStorage.getItem(key) as string);
  const sessionItem = JSON.parse(sessionStorage.getItem(key) as string);
  return localItem || sessionItem;
};

export const removeStorageTokens = (): void => {
  localStorage.removeItem('token');
  localStorage.removeItem('renewToken');
  sessionStorage.removeItem('token');
  sessionStorage.removeItem('renewToken');
};
