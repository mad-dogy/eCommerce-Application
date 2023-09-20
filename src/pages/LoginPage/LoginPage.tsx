import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { type MyCustomerSignin } from '@commercetools/platform-sdk';
import { Logo } from '../../components/Logo/Logo';
import styles from './LoginPage.module.scss';
import { PUBLIC_ROUTES } from '../../constants/routes';
import { AuthContext } from '../../context';
import { signIn } from '../../api/ClientMe';
import { LoginForm } from '../../components/Forms/LoginForm/LoginForm';

export const LoginPage = (): JSX.Element => {
  const navigate = useNavigate();
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const onLogin = async (data: MyCustomerSignin): Promise<void> => {
    try {
      const customerId = await signIn(data);
      setIsAuth(true);
      localStorage.setItem('customerId', customerId);
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
