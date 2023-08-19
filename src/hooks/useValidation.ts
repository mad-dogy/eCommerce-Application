/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-unused-expressions */
import { useEffect, useState } from 'react';
import { type emailValidationType as validationType } from '../helpers/validation/emailValidation';
import { emailRegex, passwordRegex } from '../constants/regexConstants';

export const useValidation = (value: string, validations: validationType, inputType: string) => {
  const [isInputValid, setInputValid] = useState(false);

  const [isEmpty, setEmpty] = useState(true);
  const [isEmail, setEmailError] = useState(false);
  const [isPassword, setPasswordError] = useState(false);

  // изменить на ключ значение
  const validationErrors = [isEmpty];

  switch (inputType) {
    case 'email':
      validationErrors.push(isEmail);
      break;
    case 'password':
      validationErrors.push(isPassword);
      break;
    default: break;
  }
  console.log('val err', validationErrors.every((elem) => elem));

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case 'isEmpty':
          value ? setEmpty(false) : setEmpty(true);
          break;
        case 'isEmail':
          emailRegex.test(value) ? setEmailError(false) : setEmailError(true);
          break;
        case 'isPassword':
          passwordRegex.test(value) ? setPasswordError(false) : setPasswordError(true);
          break;
        default: break;
      }
    }
  }, [value]);

  useEffect(() => {
    if (validationErrors.every((elem) => elem)) {
      setInputValid(false);
    } else {
      setInputValid(true);
    }
    console.log(isInputValid);
  }, [isEmpty, isEmail, isPassword]);

  return {
    validationErrors,
    isInputValid,
  };
};
