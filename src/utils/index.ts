import { API_LINK } from '../components/common/constants';
import { ItemsData, Product, ProductPrice, User } from '../components/common/types';
import { trackItem, untrackItem } from '../store/slices';
import { store } from '../store/store';

export const fetchProducts = async (query: string): Promise<ItemsData> => {
  const res: Response = await fetch(query);
  if (!res.ok) {
    throw new Error('Sorry, unable to fetch info. Status: ' + res.status);
  }
  const data: ItemsData = await res.json();
  return data;
};

export const fetchProduct = async (key: string) => {
  const URL = API_LINK + `product?key=${key}`;
  const response: Response = await fetch(URL);
  const result: Product & ProductPrice = await response.json();
  return result;
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

export const getStorageItem = (key: string) => {
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

export const toggleItemTrack = (actionType: string, key: string): void => {
  if (actionType === 'track') {
    store.dispatch(trackItem(key));
  } else if (actionType === 'untrack') {
    store.dispatch(untrackItem(key));
  }
};
