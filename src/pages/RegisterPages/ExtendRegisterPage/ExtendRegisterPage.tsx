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
import { modifyToCorrectDate } from '../../../helpers/modifyToCorrectDate';
import { setCustomerExtendInfo } from '../../../api/Customers/Authorization';
import { type CustomerExtendInfo } from '../../../api/types';
import { PRIVATE_ROUTES } from '../../../constants/routes';

export const ExtendRegisterPage = (): JSX.Element => {
  const {
    control, register, formState: { errors, isValid }, handleSubmit,
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: 'all',
  });

  const navigate = useNavigate();

  const customerId = localStorage.getItem('customerId');

  const onSubmit = async (data: CustomerExtendInfo): Promise<void> => {
    try {
      // eslint-disable-next-line no-param-reassign
      data.dateOfBirth = modifyToCorrectDate(data.dateOfBirth);
      await setCustomerExtendInfo(customerId, data);
      navigate(PRIVATE_ROUTES.Base);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className={styles.register__inner}>
      <div className={styles.content}>
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

          <Button variant="contained" type="submit" disabled={!isValid}>Confirm</Button>
        </form>
      </div>
    </div>
  );
};
