import { ItemsData } from '../components/common/types';
import { RATING_DIVISOR } from '../components/common/constants/index';

const RATING_STAR_AMOUNT = 5;

export const fetchProducts = async (query: string): Promise<ItemsData> => {
  const res: Response = await fetch(query);
  if (!res.ok) {
    throw new Error('Sorry, unable to fetch info. Status: ' + res.status);
  }
  const data: ItemsData = await res.json();
  return data;
};

export const getProductRating = (rating: number): [boolean[], number] => {
  const rate = Math.floor(rating / RATING_DIVISOR);
  const arr = Array(RATING_STAR_AMOUNT)
    .fill(false)
    .map((_, index) => index <= rate - 1);
  return [arr, rate];
};
