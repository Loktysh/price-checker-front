import { useEffect, useState } from 'react';

type DebouncedValue = string | number | boolean;

// Hook specifically used to debounce inputs for optimization

const useDebounce = (value: DebouncedValue, delay: number) => {
  const [debounceValue, setDebounceValue] = useState<DebouncedValue>(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => clearTimeout(timeout);
  });

  return debounceValue;
};

export { useDebounce };
