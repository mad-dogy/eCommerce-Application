export interface passwordValidationType {
  isPassword: boolean;
}

export const emailValidations: passwordValidationType = {
  isPassword: true,
};

export const emailValidationErrors = {
  isPassword: 'Invalid email address format',
};
