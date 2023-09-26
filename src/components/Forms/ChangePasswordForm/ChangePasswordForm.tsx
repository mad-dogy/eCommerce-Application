import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from 'react-hook-form';
import { validationSchema } from './validationSchema';
import { PasswordInput } from '../../UI/inputs/PasswordInput/PasswordInput';
import { Button } from '../../UI/Button/Button';
import styles from './ChangePasswordForm.module.scss';

interface ChangePasswordFormProps {
  onFormSubmit: (props: any) => Promise<void>;
  onFormCanceling: (props: any) => Promise<void>;

  className?: string;
}

export const ChangePasswordForm = (props: ChangePasswordFormProps): JSX.Element => {
  const { onFormSubmit, onFormCanceling, className } = props;

  const {
    control, register, formState: { errors }, handleSubmit,
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: 'onBlur',
  });

  return (
    <form className={`${styles.form} ${className}`} onSubmit={handleSubmit(onFormSubmit)}>

      <Controller
        name="password"
        control={control}
        {...register('password')}
        render={({ field }) => (
          <PasswordInput
            {...field}
            placeholder="Enter password"
            label="Password"
            size="small"
            className={styles.input_default}
            error={Boolean(errors?.password?.message)}
            helperText={String(errors?.password?.message ?? '')}
          />
        )}
      />

      <Controller
        name="confirmPassword"
        control={control}
        {...register('confirmPassword')}
        render={({ field }) => (
          <PasswordInput
            {...field}
            placeholder="Confirm password"
            label="Confirm password"
            size="small"
            className={styles.input_default}
            error={Boolean(errors?.confirmPassword?.message)}
            helperText={String(errors?.confirmPassword?.message ?? '')}
          />
        )}
      />

      <div className={styles['confirm-edit-btns']}>
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
