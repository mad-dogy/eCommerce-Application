import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Logo } from '../../../components/Logo/Logo';
import { Button } from '../../../components/UI/Button/Button';
import { PasswordInput } from '../../../components/UI/inputs/PasswordInput/PasswordInput';
import { TextInput } from '../../../components/UI/inputs/TextInput/TextInput';
import styles from '../RegisterPage.module.scss';
import { validationSchema } from './constants';

export const BaseRegisterPage = (): JSX.Element => {
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
        <Logo />
        <h3 className={styles['register__step-title']}>Registration</h3>

        <form className={styles.register__form} onSubmit={handleSubmit(onSubmit)}>
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

          <div className={styles['form__password-info']}>
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

            <Controller
              name="confirmPassword"
              control={control}
              {...register('confirmPassword')}
              render={({ field }) => (
                <PasswordInput
                  {...field as any}
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

          <div className={styles.register__btns}>
            <Button variant="contained" type="submit">SIGN IN</Button>

            <Button variant="contained">
              <ArrowForwardIcon />
            </Button>
          </div>
        </form>
      </div>

      <div className={styles['register__to-login']}>
        Alredy have account? Click here
      </div>
    </div>
  );
};
