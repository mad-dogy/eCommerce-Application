import * as yup from 'yup';

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
  country: yup.string().required('Field is required'),
  city: yup.string().required('Field is required'),
  street: yup.string().required('Field is required'),
});
