import { Link, useNavigate } from 'react-router-dom';
import { Logo } from '../../components/Logo/Logo';
import { PUBLIC_ROUTES } from '../../constants/routes';
import { SignInProps, signIn } from '../../api/ClientMe';
import { LoginForm } from '../../components/Forms/LoginForm/LoginForm';
import { LOCAL_STORAGE_KEYS } from '../../constants/constants';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { authSlice } from '../../store/reducers/authSlice';
import styles from './LoginPage.module.scss';

const { setAuth } = authSlice.actions;

export const LoginPage = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { isAuth } = useAppSelector(state => state.authReducer);

  const navigate = useNavigate();

  const onLogin = async (data: SignInProps) => {
    try {
      const customerId = await signIn(data);
      dispatch(setAuth(true));
      localStorage.setItem(LOCAL_STORAGE_KEYS.customerId, customerId);
      navigate(PUBLIC_ROUTES.Base);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className={styles.login__inner}>
      <Logo />

      <div className={styles.content}>
        <h3 className={styles.login__title}>Login</h3>

        <LoginForm onFormSubmit={onLogin} />

        <Link to={PUBLIC_ROUTES.BaseRegisterPage} className={styles['login__to-register']}>
          Do not have an account?
          <span> Sign up</span>
        </Link>
      </div>
    </div>
  );
};
