import { useProductRating } from '../useProductRating';
import { renderHook } from '@testing-library/react-hooks';

describe('useProductRating', () => {
  it('Should return correct values when given the rating', () => {
    const { result } = renderHook(() => useProductRating(5.0));

    const [returnedArr] = result.current;

    expect(returnedArr).toHaveLength(5);
  });
});
