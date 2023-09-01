import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TextFieldsOutlined } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../../components/UI/Button/Button';
import { TextInput } from '../../../components/UI/inputs/TextInput/TextInput';
import { availableCountries, validationSchema } from './validationSchema';
import { Select } from '../../../components/UI/Select/Select';
import styles from '../RegisterPage.module.scss';

const isObligatory = false;

export const ExtendRegisterPage = (): JSX.Element => {
  const {
    control, register, formState: { errors, isValid }, handleSubmit,
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: 'all',
  });

  const navigate = useNavigate();

  const onSubmit = (data: CustomerExtendInfo): void => {
    alert(JSON.stringify(data));
  };

  return (
    <div className={styles.register__inner}>
      <h3 className={styles['register__step-title']}>Extend registration</h3>

      <form className={styles.register__form} onSubmit={handleSubmit(onSubmit)}>
        <div className={styles['form__personal-info']}>
          <h3 className={styles.label}>Personal info:</h3>

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
                helperText={errors?.firstName?.message ?? ''}
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
                helperText={errors?.lastName?.message ?? ''}
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
              {errors?.dateOfBirth?.message ?? ''}
            </p>
          </div>
        </div>

        <div className={styles['form__address-info']}>
          <h3 className={styles.label}>Address info:</h3>

          <div className={styles['form__address-info__child']}>
            <Controller
              control={control}
              {...register('country')}
              render={({ field }) => (
                <Select
                  {...field as any}
                  label="Country"
                  selectItems={availableCountries}
                  error={Boolean(errors?.country?.message)}
                  helperText={errors?.country?.message ?? ''}
                />
              )}
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
                  helperText={errors?.city?.message ?? ''}
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
                  helperText={errors?.street?.message ?? ''}
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

        <div className={styles.register__btns}>
          <Button
            variant="contained"
            type="button"
            onClick={() => { navigate('/'); }}
            disabled={isObligatory}
          >
            Skip for now
          </Button>
          <Button variant="contained" type="submit" disabled={!isValid}>Confirm</Button>
        </div>
      </form>
    </div>
  );
};
