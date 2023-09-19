import { useState } from 'react';

export function useFetching<T, P>(
  callBack: any,
  unwrap?: boolean, // to handle errors in components
): [
  (args: P) => Promise<IsPromise<T> | undefined>,
  boolean,
  string,
  { errorCode?: string; status: number } | null
] {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [status, setStatus] = useState<{ errorCode?: string; status: number } | null>(null);

  const fetchData = async (args: P): Promise<IsPromise<T> | undefined> => {
    try {
      setIsLoading(true);
      const response = await callBack(args);
      setError('');
      return response || 'success';
    } catch (e) {
      if (e instanceof Error/* Class */) {
        /* setStatus({ errorCode: e., status: e.status }); */
        setError(e.message);
      } else {
        alert('unhandled error');
        console.warn(e);
      }

      if (unwrap) {
        throw e;
      }
    } finally {
      setIsLoading(false);
    }
  };

  return [fetchData, isLoading, error, status];
}
