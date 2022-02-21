import { useFixedDescription } from '../useFixedDescription';
import { renderHook } from '@testing-library/react-hooks';

describe('useFixedDescription', () => {
  it('Should correctly output the formatted space', () => {
    const { result } = renderHook(() => useFixedDescription('aaa&nbsp;aaa'));
    expect(result.current).toEqual('aaa aaa');
  });

  it('Should correctly output the formatted quote', () => {
    const { result } = renderHook(() => useFixedDescription('aaa&quot;aaa'));
    expect(result.current).toEqual('aaa"aaa');
  });
});
