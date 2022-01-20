import { ItemsData } from '../components/common/types';

export const fetchProducts = async (query: string): Promise<ItemsData> => {
  const res: Response = await fetch(query);
  if (!res.ok) throw new Error('Sorry, unable to fetch info. Status: ' + res.status);
  const data: ItemsData = await res.json();
  return data;
};
