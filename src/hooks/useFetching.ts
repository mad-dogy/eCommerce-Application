import { useState } from 'react';

export function useFetching<T, P>(
  callBack: any,
  unwrap?: boolean, // to handle errors in components
): [
  (args: P) => Promise<IsPromise<T> | undefined>,
  boolean,
  string,
] {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchData = async (args: P): Promise<IsPromise<T> | undefined> => {
    try {
      setIsLoading(true);
      const response = await callBack(args);
      setError('');
      return response || 'success';
    } catch (e) {
      setError(e.message);

      if (unwrap) {
        throw e;
      }
    } finally {
      setIsLoading(false);
    }
  };

  return [fetchData, isLoading, error];
}
