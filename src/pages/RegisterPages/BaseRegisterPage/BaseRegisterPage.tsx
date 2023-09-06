import { useForm, Controller } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useContext } from 'react';
import { type CustomerDraft } from '@commercetools/platform-sdk';
import { Logo } from '../../../components/Logo/Logo';
import { Button } from '../../../components/UI/Button/Button';
import { PasswordInput } from '../../../components/UI/inputs/PasswordInput/PasswordInput';
import { TextInput } from '../../../components/UI/inputs/TextInput/TextInput';
import { validationSchema } from './validationSchema';
import styles from '../RegisterPage.module.scss';
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from '../../../constants/routes';
import { AuthContext } from '../../../context';
import { signUp } from '../../../api/Customers';

export const BaseRegisterPage = (): JSX.Element => {
  const {
    control, register, formState: { errors, isValid }, handleSubmit,
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: 'all',
  });

  const navigate = useNavigate();
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const onSubmit = async (data: CustomerDraft): Promise<void> => {
    try {
      const customerId = await signUp(data);
      setIsAuth(true);
      localStorage.setItem('customerId', customerId);

      navigate(`${PRIVATE_ROUTES.ExtendRegisterPage}`);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className={styles.register__inner}>
      <Logo />

      <div className={styles.content}>
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
            <Button>
              <Link to={PUBLIC_ROUTES.Base}>
                <span>Go to shop</span>
                <ArrowForwardIosIcon fontSize="small" />
              </Link>
            </Button>
            <Button variant="contained" type="submit" disabled={!isValid}>SIGN UP</Button>
          </div>

        </form>

        <Link to={PUBLIC_ROUTES.LoginPage} className={styles['register__to-login']}>
          Alredy have account?
          <span> Log in</span>
        </Link>
      </div>
    </div>
  );
};
