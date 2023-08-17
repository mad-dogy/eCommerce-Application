import { type SetStateAction, useState } from 'react';
import { useValidation } from './useValidation';
import { type emailValidationType } from '../helpers/validation/emailValidation';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useInput = (initialValue: string, validations: emailValidationType) => {
  const [value, setValue] = useState(initialValue);
  const [isDirty, setDirty] = useState(false);

  const valid = useValidation(value, validations);

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
    isDirty,
    ...valid,
  };
};
