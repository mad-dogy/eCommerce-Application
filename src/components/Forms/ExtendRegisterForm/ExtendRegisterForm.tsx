import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { TextFieldsOutlined } from '@mui/icons-material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TextInput } from '../../UI/inputs/TextInput/TextInput';
import { Button } from '../../UI/Button/Button';
import { getAvailableCountries } from '../../../helpers/setAvailableCountries';
import { Loader } from '../../UI/Loader/Loader';
import { validationSchema } from '../../../pages/RegisterPages/ExtendRegisterPage/validationSchema';
import styles from './ExtendRegisterForm.module.scss';
import { Select } from '../../UI/Select/Select';

interface BaseRegisterFormProps {
  onFormSubmit: (props: any) => Promise<void>;
  className?: string;
}

export const ExtendRegisterForm = (props: BaseRegisterFormProps) => {
  const { onFormSubmit, className } = props;

  const {
    control, register, formState: { errors }, handleSubmit,
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: 'onTouched',
  });

  const [availableCountries, setAvailableCountries] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getAvailableCountries(setAvailableCountries)
      .then(() => {
        setLoading(false);
      })
      .catch(() => {});
  }, []);

  const formContent = (
    <form
      className={`${styles.form} ${className}`}
      onSubmit={handleSubmit(onFormSubmit)}
    >
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
                  className={styles.data}
                  renderInput={(params: any) => (
                    <TextFieldsOutlined
                      {...params}
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
        <h3 className={styles.label}>Shipping address:</h3>

        <div className={styles['form__address-info__child']}>
          <Controller
            control={control}
            {...register('shippingCountry')}
            render={({ field }) => (
              <Select
                {...field as any}
                label="Country"
                selectItems={availableCountries}
                error={Boolean(errors?.shippingCountry?.message)}
                helperText={errors?.shippingCountry?.message ?? ''}
              />
            )}
          />

          <Controller
            control={control}
            {...register('shippingCity')}
            render={({ field }) => (
              <TextInput
                {...field as any}
                placeholder="Enter city"
                label="City"
                size="small"
                className={styles.input_mini}
                error={Boolean(errors?.shippingCity?.message)}
                helperText={errors?.shippingCity?.message ?? ''}
              />
            )}
          />
        </div>

        <div className={styles['form__address-info__child']}>
          <Controller
            control={control}
            {...register('shippingStreet')}
            render={({ field }) => (
              <TextInput
                {...field as any}
                placeholder="Enter street"
                label="Street"
                size="small"
                className={styles.input_mini}
                error={Boolean(errors?.shippingStreet?.message)}
                helperText={errors?.shippingStreet?.message ?? ''}
              />
            )}
          />

          <Controller
            control={control}
            {...register('shippingPostalCode')}
            render={({ field }) => (
              <TextInput
                {...field as any}
                placeholder="Enter postal code"
                label="Postal code"
                size="small"
                className={styles.input_mini}
                error={Boolean(errors?.shippingStreet?.message)}
                helperText={errors?.shippingStreet?.message ?? ''}
              />
            )}
          />
        </div>
      </div>

      <div className={styles['form__address-info']}>
        <h3 className={styles.label}>Billing address:</h3>

        <div className={styles['form__address-info__child']}>
          <Controller
            control={control}
            {...register('billingCountry')}
            render={({ field }) => (
              <Select
                {...field as any}
                label="Country"
                selectItems={availableCountries}
                error={Boolean(errors?.billingCountry?.message)}
                helperText={errors?.billingCountry?.message ?? ''}
              />
            )}
          />

          <Controller
            control={control}
            {...register('billingCity')}
            render={({ field }) => (
              <TextInput
                {...field as any}
                placeholder="Enter city"
                label="City"
                size="small"
                className={styles.input_mini}
                error={Boolean(errors?.billingCity?.message)}
                helperText={errors?.billingCity?.message ?? ''}
              />
            )}
          />
        </div>

        <div className={styles['form__address-info__child']}>
          <Controller
            control={control}
            {...register('billingStreet')}
            render={({ field }) => (
              <TextInput
                {...field as any}
                placeholder="Enter street"
                label="Street"
                size="small"
                className={styles.input_mini}
                error={Boolean(errors?.billingStreet?.message)}
                helperText={errors?.billingStreet?.message ?? ''}
              />
            )}
          />

          <Controller
            control={control}
            {...register('billingPostalCode')}
            render={({ field }) => (
              <TextInput
                {...field as any}
                placeholder="Enter postal code"
                label="Postal code"
                size="small"
                className={styles.input_mini}
                error={Boolean(errors?.billingPostalCode?.message)}
                helperText={errors?.billingPostalCode?.message ?? ''}
              />
            )}
          />
        </div>

      </div>

      <Button variant="contained" type="submit">Confirm</Button>
    </form>
  );

  return (
    <div>
      {isLoading
        ? <Loader />
        : formContent}
    </div>
  );
};
