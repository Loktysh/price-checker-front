import { useEffect, useState } from 'react';

// Hook specifically used to debounce inputs for optimization

const useDebounce = <T>(value: T, delay: number) => {
  const [debounceValue, setDebounceValue] = useState<T>(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => clearTimeout(timeout);
  });

  return debounceValue;
};

export { useDebounce };
