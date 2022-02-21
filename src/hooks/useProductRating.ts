import { RATING_DIVISOR } from '../components/common/constants';

const RATING_STAR_AMOUNT = 5;

export const useProductRating = (rating: number | undefined | null): [boolean[], number] => {
  let rate: number;
  const arr = Array(RATING_STAR_AMOUNT).fill(false);
  if (rating) {
    rate = Math.floor(rating / RATING_DIVISOR);
    return [arr.map((_, index) => index <= rate - 1), rate];
  } else {
    rate = 0;
    return [arr, rate];
  }
};
