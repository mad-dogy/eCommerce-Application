export interface emailValidationType {
  isEmpty: boolean;
  isEmail: boolean;
}

export const emailValidations: emailValidationType = {
  isEmpty: false,
  isEmail: true,
};

export const emailValidationErrors = {
  required: 'This field is required',
  email: 'Invalid email address format',
};
