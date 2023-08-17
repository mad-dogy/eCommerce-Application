import { useEffect, useState } from 'react';
import { type emailValidationType } from '../helpers/validation/emailValidation';
import { emailRegex } from '../constants/regexConstants';

export const useValidation = (value: string, validations: emailValidationType) => {
  const [isEmpty, setEmpty] = useState(true);
  const [minLengthError, setMinLengthError] = useState(false);
  const [isEmail, setIsEmailError] = useState(false);

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case 'minLength':
          value.length < validations[validation]
            ? setMinLengthError(true)
            : setMinLengthError(false);
          break;
        case 'isEmpty':
          value ? setEmpty(false) : setEmpty(true);
          break;
        case 'isEmail':
          emailRegex.test(value) ? setIsEmailError(false) : setIsEmailError(true);
          break;
        default: break;
      }
    }
  }, [value]);

  return {
    isEmpty,
    minLengthError,
    isEmail,
  };
};
