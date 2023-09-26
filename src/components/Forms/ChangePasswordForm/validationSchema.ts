import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  password: yup.string()
    .min(8, 'Password must be at least 8 characters')
    .max(32, 'Password must be at most 32 characters')
    .matches(/[0-9]/, 'Password must contain at least one digit (0-9)')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter (a-z)')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter (A-Z)')
    .required('Password is required'),
  confirmPassword: yup.string()
    .oneOf([yup.ref('password'), null], 'Passwords does not match')
    .required('Confirm password is required'),
});
