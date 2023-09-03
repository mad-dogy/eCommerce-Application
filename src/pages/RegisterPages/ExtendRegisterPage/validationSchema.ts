import * as yup from 'yup';
import { type SelectItem } from '../../../components/UI/Select/Select';

export const validationSchema = yup.object().shape({
  firstName: yup.string().required('Field is required'),
  lastName: yup.string().required('Field is required'),
  dateOfBirth: yup.date()
    .nullable('Date of birth can be a type of date')
    .required('Date of birth is required')
    .max(new Date(), 'Date of birth cannot be in the future')
    .test('minAge', 'You must be at least 13 years old', (value) => {
      const today = new Date();
      const dateOfBirth = new Date(value);
      let age = today.getFullYear() - dateOfBirth.getFullYear();

      if (today.getMonth() < dateOfBirth.getMonth()
        || (today.getMonth() === dateOfBirth.getMonth()
          && today.getDate() < dateOfBirth.getDate()
        )
      ) {
        age -= 1;
      }

      return age >= 13;
    })
    .test('maxAge', 'You must be at most 100 years old', (value) => {
      const today = new Date();
      const dateOfBirth = new Date(value);
      let age = today.getFullYear() - dateOfBirth.getFullYear();

      if (today.getMonth() < dateOfBirth.getMonth()
        || (today.getMonth() === dateOfBirth.getMonth()
          && today.getDate() < dateOfBirth.getDate()
        )
      ) {
        age -= 1;
      }

      return age <= 100;
    }),
  shippingCountry: yup.string().required('Field is required'),
  shippingCity: yup.string().required('Field is required'),
  shippingStreet: yup.string().required('Field is required'),
  shippingPostalCode: yup.string().required('Field is required'),

  billingCountry: yup.string().required('Field is required'),
  billingCity: yup.string().required('Field is required'),
  billingStreet: yup.string().required('Field is required'),
  billingPostalCode: yup.string().required('Field is required'),
});

export const availableCountries: SelectItem[] = [
  { value: 'US', name: 'United States (US)' },
  { value: 'DE', name: 'Germany (DE)' },
  { value: 'ES', name: 'Spain (ES)' },
  { value: 'AU', name: 'Australia (AU)' },
];
