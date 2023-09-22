import { Customer } from '@commercetools/platform-sdk';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PaymentsIcon from '@mui/icons-material/Payments';
import LockIcon from '@mui/icons-material/Lock';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { TextFieldsOutlined } from '@mui/icons-material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { validationSchema } from './validationSchema';
import styles from './EditPersonalInfoForm.module.scss';
import { TextInput } from '../../UI/inputs/TextInput/TextInput';
import { getAvailableCountries } from '../../../helpers/setAvailableCountries';
import { selectBillingAddressInfo, selectShippingAddressInfo } from '../../../helpers/getAddressesInfo';
import { Select, SelectItem } from '../../UI/Select/Select';
import { Loader } from '../../UI/Loader/Loader';
import { CustomerUpdateInfo } from '../../../entities/CustomerTypes/CustomerExtendInfo.type';
import { Button } from '../../UI/Button/Button';

interface EditPersonalInfoFormProps {
  customer: Customer;
  onSubmit: (data: CustomerUpdateInfo) => Promise<void>;
}

export const EditPersonalInfoForm = (props: EditPersonalInfoFormProps) => {
  const { customer, onSubmit } = props;

  const shippingAddressInfo = selectShippingAddressInfo(customer);
  const billingAddressInfo = selectBillingAddressInfo(customer);

  const {
    control, register, formState: { errors }, handleSubmit,
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: 'onBlur',
    defaultValues: {
      firstName: customer.firstName,
      lastName: customer.lastName,
      email: customer.email,

      shippingCountry: shippingAddressInfo.country,
      shippingCity: shippingAddressInfo.city,
      shippingStreet: shippingAddressInfo.streetName,
      shippingPostalCode: shippingAddressInfo.postalCode,

      billingCountry: billingAddressInfo.country,
      billingCity: billingAddressInfo.city,
      billingStreet: billingAddressInfo.streetName,
      billingPostalCode: billingAddressInfo.postalCode,
    },
  });

  const [availableCountries, setAvailableCountries] = useState<SelectItem[]>();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getAvailableCountries(setAvailableCountries)
      .then(() => {
        setLoading(false);
      })
      .catch(() => {});
  }, []);

  const personalInfoCard = (
    <div className={styles['info-card']}>
      <div className={styles.item}>
        <span className={styles.item__name}>
          First name
        </span>
        <span>
          <Controller
            control={control}
            {...register('firstName')}
            render={({ field }) => (
              <TextInput
                {...field as any}
                placeholder=""
                label=""
                size="small"
                className={styles.input_default}
                error={Boolean(errors?.firstName?.message)}
                helperText={errors?.firstName?.message ?? ''}
              />
            )}
          />
        </span>
      </div>

      <div className={styles.item}>
        <span className={styles.item__name}>
          Last name
        </span>
        <span>
          <Controller
            control={control}
            {...register('lastName')}
            render={({ field }) => (
              <TextInput
                {...field as any}
                placeholder=""
                label=""
                size="small"
                className={styles.input_default}
                error={Boolean(errors?.lastName?.message)}
                helperText={errors?.lastName?.message ?? ''}
              />
            )}
          />
        </span>
      </div>

      <div className={styles.item}>
        <span className={styles.item__name}>
          Date of birth
        </span>
        <span>
          <div className={styles['datePicker-wrapper']}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Controller
                name="dateOfBirth"
                {...register('dateOfBirth')}
                control={control}
                render={({ field }) => (
                  <DatePicker
                    {...field as any}
                    label=""
                    className={styles.data}
                    defaultValue={dayjs(customer.dateOfBirth)}
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
        </span>
      </div>

    </div>
  );

  const accountInfoCard = (
    <div className={styles['info-card']}>

      <div className={styles.item}>
        <span className={styles.item__name}>
          Email
        </span>
        <span>
          <Controller
            name="email"
            control={control}
            {...register('email')}
            render={({ field }) => (
              <TextInput
                {...field}
                placeholder=""
                label=""
                size="small"
                className={styles.input_default}
                error={Boolean(errors?.email?.message)}
                helperText={String(errors?.email?.message ?? '')}
              />
            )}
          />
        </span>
      </div>

      <div className={styles.item}>
        <span className={styles.item__name}>
          Password
        </span>
        <span>
          {customer.password}
        </span>
      </div>
    </div>
  );

  let shippingAddressInfoCard;
  let billingAddressInfoCard;

  if (availableCountries) {
    shippingAddressInfoCard = (
      <div className={styles['info-card']}>
        <div className={styles.item}>
          <span className={styles.item__name}>
            Country
          </span>
          <span>
            <Controller
              control={control}
              {...register('shippingCountry')}
              render={({ field }) => (
                <Select
                  {...field as any}
                  placeholder=""
                  label=""
                  selectItems={availableCountries}
                  error={Boolean(errors?.shippingCountry?.message)}
                  helperText={errors?.shippingCountry?.message ?? ''}
                />
              )}
            />
          </span>
        </div>

        <div className={styles.item}>
          <span className={styles.item__name}>
            City
          </span>
          <span>
            <Controller
              control={control}
              {...register('shippingCity')}
              render={({ field }) => (
                <TextInput
                  {...field as any}
                  label=""
                  size="small"
                  className={styles.input_mini}
                  error={Boolean(errors?.shippingCity?.message)}
                  helperText={errors?.shippingCity?.message ?? ''}
                />
              )}
            />
          </span>
        </div>

        <div className={styles.item}>
          <span className={styles.item__name}>
            Street name
          </span>
          <span>
            <Controller
              control={control}
              {...register('shippingStreet')}
              render={({ field }) => (
                <TextInput
                  {...field as any}
                  placeholder=""
                  label=""
                  size="small"
                  className={styles.input_mini}
                  error={Boolean(errors?.shippingStreet?.message)}
                  helperText={errors?.shippingStreet?.message ?? ''}
                />
              )}
            />
          </span>
        </div>

        <div className={styles.item}>
          <span className={styles.item__name}>
            PostalCode
          </span>
          <span>
            <Controller
              control={control}
              {...register('shippingPostalCode')}
              render={({ field }) => (
                <TextInput
                  {...field as any}
                  placeholder=""
                  label=""
                  size="small"
                  className={styles.input_mini}
                  error={Boolean(errors?.shippingStreet?.message)}
                  helperText={errors?.shippingStreet?.message ?? ''}
                />
              )}
            />
          </span>
        </div>

      </div>
    );
    billingAddressInfoCard = (
      <div className={styles['info-card']}>
        <div className={styles.item}>
          <span className={styles.item__name}>
            Country
          </span>
          <span>
            <Controller
              control={control}
              {...register('billingCountry')}
              render={({ field }) => (
                <Select
                  {...field as any}
                  label=""
                  selectItems={availableCountries}
                  error={Boolean(errors?.shippingCountry?.message)}
                  helperText={errors?.shippingCountry?.message ?? ''}
                />
              )}
            />
          </span>
        </div>

        <div className={styles.item}>
          <span className={styles.item__name}>
            City
          </span>
          <span>
            <Controller
              control={control}
              {...register('billingCity')}
              render={({ field }) => (
                <TextInput
                  {...field as any}
                  placeholder=""
                  label=""
                  size="small"
                  className={styles.input_mini}
                  error={Boolean(errors?.shippingCity?.message)}
                  helperText={errors?.shippingCity?.message ?? ''}
                />
              )}
            />
          </span>
        </div>

        <div className={styles.item}>
          <span className={styles.item__name}>
            Street name
          </span>
          <span>
            <Controller
              control={control}
              {...register('billingStreet')}
              render={({ field }) => (
                <TextInput
                  {...field as any}
                  placeholder=""
                  label=""
                  size="small"
                  className={styles.input_mini}
                  error={Boolean(errors?.shippingStreet?.message)}
                  helperText={errors?.shippingStreet?.message ?? ''}
                />
              )}
            />
          </span>
        </div>

        <div className={styles.item}>
          <span className={styles.item__name}>
            PostalCode
          </span>
          <span>
            <Controller
              control={control}
              {...register('billingPostalCode')}
              render={({ field }) => (
                <TextInput
                  {...field as any}
                  placeholder=""
                  label=""
                  size="small"
                  className={styles.input_mini}
                  error={Boolean(errors?.shippingStreet?.message)}
                  helperText={errors?.shippingStreet?.message ?? ''}
                />
              )}
            />
          </span>
        </div>

      </div>
    );
  }

  return (
    <div>
      {isLoading
        ? <div />
        : (
          <div>
            <form className={styles.content}>
              <div className={styles['info-block']}>
                <h6>
                  <AssignmentIndIcon />
                  Personal info
                </h6>
                {personalInfoCard}
              </div>

              <div className={styles['info-block']}>
                <h6>
                  <LockIcon />
                  Account info
                </h6>
                {accountInfoCard}

              </div>

              <div className={styles['info-block']}>
                <h6>
                  <LocalShippingIcon />
                  Shipping address info
                </h6>
                {shippingAddressInfoCard}
              </div>

              <div className={styles['info-block']}>
                <h6>
                  <PaymentsIcon />
                  Billing address info
                </h6>
                {billingAddressInfoCard}
              </div>

            </form>
            <Button
              className="button_small"
              variant="outlined"
              type="submit"
              onClick={handleSubmit(onSubmit)}
            >
              Submit
            </Button>
          </div>
        )}

    </div>
  );
};
