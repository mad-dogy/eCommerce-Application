import { Link, useNavigate } from 'react-router-dom';
import { Logo } from '../../components/Logo/Logo';
import { ROUTES } from '../../constants/routes';
import { SignInProps } from '../../api/ClientMe';
import { LoginForm } from '../../components/Forms/LoginForm/LoginForm';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchSignIn } from '../../store/reducers/actionCreators/authActionCreators';
import styles from './LoginPage.module.scss';
import { Loader } from '../../components/UI/Loader/Loader';
import { getAuthError } from '../../store/selectors/getAuthFields/getAuthError';
import { getAuthLoading } from '../../store/selectors/getAuthFields/getAuthLoading';

export const LoginPage = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const error = useAppSelector(getAuthError);
  const isLoading = useAppSelector(getAuthLoading);

  const onSignIn = async (data: SignInProps) => {
    try {
      await dispatch(fetchSignIn(data));

      navigate(ROUTES.Base);
    } catch (error) {}
  };

  let content;
  if (isLoading) {
    content = <Loader />;
  } else {
    content = (
      <div className={styles.content}>
        <h3 className={styles.login__title}>Login</h3>

        <LoginForm onFormSubmit={onSignIn} />

        <Link to={ROUTES.BaseRegisterPage} className={styles['login__to-register']}>
          Do not have an account?
          <span> Sign up</span>
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.login__inner}>
      <Logo />
      {content}
    </div>
  );
};
