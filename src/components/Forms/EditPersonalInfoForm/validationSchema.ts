import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  email: yup.string().email('Email is invalid').required('Email is required'),

  firstName: yup.string().required('Field is required').max(30),
  lastName: yup.string().required('Field is required').max(30),
  dateOfBirth: yup.date()
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
  shippingCity: yup.string().required('Field is required').max(30),
  shippingStreet: yup.string().required('Field is required').max(30),
  shippingPostalCode: yup.string().required('Field is required').max(8),

  billingCountry: yup.string().required('Field is required'),
  billingCity: yup.string().required('Field is required').max(30),
  billingStreet: yup.string().required('Field is required').max(30),
  billingPostalCode: yup.string().required('Field is required').max(8),
});
