import { useDebounce } from '../useDebounce';
import { renderHook } from '@testing-library/react-hooks';

describe('useDebounce', () => {
  it('Should return a correct value', () => {
    const { result } = renderHook(() => useDebounce('value', 600));
    expect(result.current).not.toBe(null);
    expect(result.current).toEqual('value');
  });
});
