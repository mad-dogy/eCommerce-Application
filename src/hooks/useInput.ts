import { type SetStateAction, useState } from 'react';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);
  const [isDirty, setDirty] = useState(false);

  const onChange = (event: { target: { value: SetStateAction<string>; }; }): void => {
    setValue(event.target.value);
  };

  const onBlur = (): void => {
    setDirty(true);
  };

  return {
    value,
    onChange,
    onBlur,
  };
};
