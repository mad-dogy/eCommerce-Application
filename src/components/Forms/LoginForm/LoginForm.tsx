import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { validationSchema } from '../../../pages/LoginPage/validationSchema';
import { TextInput } from '../../UI/inputs/TextInput/TextInput';
import { PasswordInput } from '../../UI/inputs/PasswordInput/PasswordInput';
import { Button } from '../../UI/Button/Button';
import { PUBLIC_ROUTES } from '../../../constants/routes';
import styles from './LoginForm.module.scss';

interface LoginFormProps {
  onFormSubmit: (props: any) => Promise<void>;
  className?: string;
}

export const LoginForm = (props: LoginFormProps): JSX.Element => {
  const { onFormSubmit, className } = props;

  const {
    control, register, formState: { errors }, handleSubmit,
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: 'onBlur',
  });

  return (
    <form
      className={`${styles.form} ${className}`}
      onSubmit={handleSubmit(onFormSubmit)}
    >
      <Controller
        name="email"
        control={control}
        {...register('email')}
        render={({ field }) => (
          <TextInput
            {...field as any}
            placeholder="Enter your email"
            label="Email"
            size="small"
            className={styles.input_default}
            error={Boolean(errors?.email?.message)}
            helperText={String(errors?.email?.message ?? '')}
          />
        )}
      />

      <Controller
        name="password"
        control={control}
        {...register('password')}
        render={({ field }) => (
          <PasswordInput
            {...field as any}
            placeholder="Enter password"
            label="Password"
            size="small"
            className={styles.input_default}
            error={Boolean(errors?.password?.message)}
            helperText={String(errors?.password?.message ?? '')}
          />
        )}
      />

      <div className={styles.btns}>
        <Button>
          <Link to={PUBLIC_ROUTES.Base}>
            <span>Go to shop</span>
            <ArrowForwardIosIcon fontSize="small" />
          </Link>
        </Button>
        <Button variant="contained" type="submit">LOG IN</Button>
      </div>

    </form>
  );
};
