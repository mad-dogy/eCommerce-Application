import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from 'react-hook-form';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom';

import { TextInput } from '../../UI/inputs/TextInput/TextInput';
import { PasswordInput } from '../../UI/inputs/PasswordInput/PasswordInput';
import { Button } from '../../UI/Button/Button';
import { ROUTES } from '../../../constants/routes';

import styles from './BaseRegisterForm.module.scss';
import { validationSchema } from './validationSchema';

interface BaseRegisterFormProps {
  onFormSubmit: (props: any) => Promise<void>;
  className?: string;
}

export const BaseRegisterForm = (props: BaseRegisterFormProps): JSX.Element => {
  const { onFormSubmit, className } = props;

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
        name="email"
        control={control}
        {...register('email')}
        render={({ field }) => (
          <TextInput
            {...field}
            placeholder="Enter your email"
            label="Email"
            size="small"
            className={styles.input_default}
            error={Boolean(errors?.email?.message)}
            helperText={String(errors?.email?.message ?? '')}
          />
        )}
      />

      <div className={styles['form__password-info']}>
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
      </div>

      <div className={styles.btns}>
        <Button>
          <Link to={ROUTES.Base}>
            <span>Go to shop</span>
            <ArrowForwardIosIcon fontSize="small" />
          </Link>
        </Button>
        <Button variant="contained" type="submit">
          SIGN UP
        </Button>
      </div>
    </form>
  );
};
