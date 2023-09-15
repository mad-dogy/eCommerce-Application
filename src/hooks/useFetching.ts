import { useState } from 'react';

export const useFetching = (callback: (customerId: string) => void) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  console.log(10001);

  const fetching = async (customerId: string) => {
    try {
      console.log(111);
      setIsLoading(true);
      // eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
      await callback(customerId);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return [fetching, isLoading, error] as const;
};
