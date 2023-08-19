import { type SetStateAction, useState } from 'react';
import { useValidation } from './useValidation';
import { type emailValidationType as validationType } from '../helpers/validation/emailValidation';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useInput = (initialValue: string, validations: validationType, inputType: string) => {
  const [value, setValue] = useState(initialValue);
  const [isDirty, setDirty] = useState(false);

  const valid = useValidation(value, validations, inputType);

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
