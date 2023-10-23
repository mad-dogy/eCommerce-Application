import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from 'react-hook-form';

import { PasswordInput } from '../../UI/inputs/PasswordInput/PasswordInput';
import { Button } from '../../UI/Button/Button';
import { CustomerPasswordUpdateInfo } from '../../../entities/CustomerTypes/CustomerUpdateInfo.type';

import styles from './ChangePasswordForm.module.scss';
import { validationSchema } from './validationSchema';

interface ChangePasswordFormProps {
  onFormSubmit: (data: CustomerPasswordUpdateInfo) => Promise<void>;
  onFormCanceling: () => void;

  className?: string;
}

export const ChangePasswordForm = (props: ChangePasswordFormProps): JSX.Element => {
  const { onFormSubmit, onFormCanceling, className } = props;

  const {
    control,
    register,
    formState: { errors },
    handleSubmit
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: 'onBlur'
  });

  return (
    <form className={`${styles.form} ${className}`} onSubmit={handleSubmit(onFormSubmit)}>
      <Controller
        name="currentPassword"
        control={control}
        {...register('currentPassword')}
        render={({ field }) => (
          <PasswordInput
            {...field}
            placeholder="Enter current password"
            label="Current password"
            size="small"
            className={styles.input_default}
            error={Boolean(errors?.currentPassword?.message)}
            helperText={String(errors?.currentPassword?.message ?? '')}
          />
        )}
      />

      <Controller
        name="newPassword"
        control={control}
        {...register('newPassword')}
        render={({ field }) => (
          <PasswordInput
            {...field}
            placeholder="New password"
            label="New password"
            size="small"
            className={styles.input_default}
            error={Boolean(errors?.newPassword?.message)}
            helperText={String(errors?.newPassword?.message ?? '')}
          />
        )}
      />

      <div className={styles['confirm-btns']}>
        <Button
          className="button_small"
          variant="outlined"
          color="warning"
          onClick={onFormCanceling}
        >
          Cancel
        </Button>
        <Button
          className="button_small"
          variant="outlined"
          type="submit"
          onClick={handleSubmit(onFormSubmit)}
        >
          Save
        </Button>
      </div>
    </form>
  );
};
