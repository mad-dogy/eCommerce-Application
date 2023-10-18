import { Link, useNavigate } from 'react-router-dom';
import { Logo } from '../../components/Logo/Logo';
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from '../../constants/routes';
import { SignInProps } from '../../api/ClientMe';
import { LoginForm } from '../../components/Forms/LoginForm/LoginForm';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchSignIn } from '../../store/reducers/actionCreators/authActionCreators';
import styles from './LoginPage.module.scss';
import { Loader } from '../../components/UI/Loader/Loader';

export const LoginPage = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { error, isLoading } = useAppSelector(state => state.authReducer);

  const onSignIn = async (data: SignInProps) => {
    dispatch(fetchSignIn(data)).then(() => {
      if (!error) {
        navigate(PRIVATE_ROUTES.Base);
      }
    });
  };

  let content;
  if(isLoading) {
    content = <Loader />
  } else {
    content = (
      <div className={styles.content}>
        <h3 className={styles.login__title}>Login</h3>

        <LoginForm onFormSubmit={onSignIn} />

        <Link to={PUBLIC_ROUTES.BaseRegisterPage} className={styles['login__to-register']}>
          Do not have an account?
          <span> Sign up</span>
        </Link>
      </div>
    )
  }


  return (
    <div className={styles.login__inner}>
      <Logo />
      {content}
    </div>
  );
};
