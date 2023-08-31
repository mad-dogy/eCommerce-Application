import { error } from 'console';
import { Link, useNavigate } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';
import { useContext } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { type MyCustomerSignin } from '@commercetools/platform-sdk';
import { Logo } from '../../components/Logo/Logo';
import { Button } from '../../components/UI/Button/Button';
import { PasswordInput } from '../../components/UI/inputs/PasswordInput/PasswordInput';
import { TextInput } from '../../components/UI/inputs/TextInput/TextInput';
import styles from './LoginPage.module.scss';
import { validationSchema } from './validationSchema';
import { ROUTES } from '../../constants/routes';
import { AuthContext } from '../../context';
import { signIn } from '../../api/ClientMe';

export const LoginPage = (): JSX.Element => {
  const {
    control, register, formState: { errors, isValid }, handleSubmit,
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: 'all',
  });

  const navigate = useNavigate();
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const onLogin = async (data: MyCustomerSignin): Promise<void> => {
    try {
      await signIn(data);
      setIsAuth(true);
      localStorage.setItem('auth', String(true));
      navigate(`${ROUTES.Base}`);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className={styles.login__inner}>
      <Logo />
      <h3 className={styles.login__title}>Login</h3>

      <form className={styles.login__form} onSubmit={handleSubmit(onLogin)}>
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

        <div className={styles.login__btns}>
          <Button>
            <Link to={ROUTES.Base}>
              <span>Go to shop</span>
              <ArrowForwardIosIcon fontSize="small" />
            </Link>
          </Button>
          <Button variant="contained" disabled={!isValid} type="submit">LOG IN</Button>
        </div>

      </form>
      <Link to={ROUTES.BaseRegisterPage} className={styles['login__to-register']}>
        Do not have an account?
        <span> Sign up</span>
      </Link>
    </div>
  );
};
