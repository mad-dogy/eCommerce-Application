import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TextFieldsOutlined } from '@mui/icons-material';
import { Button } from '../../../components/UI/Button/Button';
import { TextInput } from '../../../components/UI/inputs/TextInput/TextInput';
import styles from '../RegisterPage.module.scss';
import { validationSchema } from './constants';
import { Select } from '../../../components/UI/Select/Select';

export const ExtendRegisterPage = (): JSX.Element => {
  const {
    control, register, formState: { errors }, handleSubmit,
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: unknown): void => {
    alert(JSON.stringify(data));
  };

  return (
    <div className={styles.register}>
      <div className={styles.register__inner}>
        <h3 className={styles['register__step-title']}>Extend registration</h3>

        <form className={styles.register__form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles['form__personal-info']}>
            <label className={styles.label}>Personal info:</label>
            <Controller
              control={control}
              {...register('firstName')}
              render={({ field }) => (
                <TextInput
                  {...field as any}
                  placeholder="Enter first name"
                  label="First name"
                  size="small"
                  className={styles.input_default}
                  error={Boolean(errors?.firstName?.message)}
                  helperText={String(errors?.firstName?.message ?? '')}
                />
              )}
            />

            <Controller
              control={control}
              {...register('lastName')}
              render={({ field }) => (
                <TextInput
                  {...field as any}
                  placeholder="Enter last name"
                  label="Last name"
                  size="small"
                  className={styles.input_default}
                  error={Boolean(errors?.lastName?.message)}
                  helperText={String(errors?.lastName?.message ?? '')}
                />
              )}
            />

            <div className={styles['datePicker-wrapper']}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Controller
                  name="dateOfBirth"
                  {...register('dateOfBirth')}
                  control={control}
                  render={({ field }) => (
                    <DatePicker
                      {...field as any}
                      label="Date of birth"
                      renderInput={(params: any) => (
                        <TextFieldsOutlined
                          {...params}
                          size="small"
                          error={Boolean(errors?.dateOfBirth?.message)}
                        />
                      )}
                    />
                  )}
                />
              </LocalizationProvider>
              <p className={styles['error-message']}>
                {errors?.dateOfBirth?.message ? String(errors?.dateOfBirth?.message) : ''}
              </p>
            </div>
          </div>

          <div className={styles['form__address-info']}>
            <label className={styles.label}>Address info:</label>

            <div className={styles['form__address-info__child']}>
              <Select
                {...register('country')}
                label="Country"
                selectItems={[
                  { value: 'US', name: 'United States (US)' },
                  { value: 'DE', name: 'Germany (DE)' },
                  { value: 'ES', name: 'Spain (ES)' },
                  { value: 'AU', name: 'Australia (AU)' },
                ]}
                error={Boolean(errors?.country?.message)}
                helperText={String(errors?.country?.message ?? '')}
              />
              <Controller
                control={control}
                {...register('city')}
                render={({ field }) => (
                  <TextInput
                    {...field as any}
                    placeholder="Enter city"
                    label="City"
                    size="small"
                    className={styles.input_mini}
                    error={Boolean(errors?.city?.message)}
                    helperText={String(errors?.city?.message ?? '')}
                  />
                )}
              />
            </div>
            <div className={styles['form__address-info__child']}>

              <Controller
                control={control}
                {...register('street')}
                render={({ field }) => (
                  <TextInput
                    {...field as any}
                    placeholder="Enter street"
                    label="Street"
                    size="small"
                    className={styles.input_mini}
                    error={Boolean(errors?.street?.message)}
                    helperText={String(errors?.street?.message ?? '')}
                  />
                )}
              />
              <TextInput
                placeholder="Enter postal code"
                label="Postal code"
                size="small"
                className={styles.input_mini}
              />
            </div>
          </div>

          <Button variant="contained" type="submit">Confirm</Button>
        </form>
      </div>
    </div>
  );
};
