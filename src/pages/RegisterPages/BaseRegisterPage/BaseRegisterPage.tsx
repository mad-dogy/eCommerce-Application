import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { type CustomerDraft } from '@commercetools/platform-sdk';
import { Logo } from '../../../components/Logo/Logo';
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from '../../../constants/routes';
import { AuthContext } from '../../../context';
import { signUp } from '../../../api/Customers/Authorization';
import { BaseRegisterForm } from '../../../components/Forms/BaseRegisterForm/BaseRegisterForm';
import { LOCAL_STORAGE_KEYS } from '../../../constants/constants';
import styles from '../RegisterPage.module.scss';

export const BaseRegisterPage = (): JSX.Element => {
  const navigate = useNavigate();
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const onSubmit = async (data: CustomerDraft): Promise<void> => {
    try {
      const customerId = await signUp(data);
      setIsAuth(true);
      localStorage.setItem(LOCAL_STORAGE_KEYS.customerId, customerId);

      navigate(PRIVATE_ROUTES.ExtendRegisterPage);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className={styles.register__inner}>
      <Logo />

      <div className={styles.content}>
        <h3 className={styles['register__step-title']}>Registration</h3>

        <BaseRegisterForm className={styles.register__form} onFormSubmit={onSubmit} />

        <Link to={PUBLIC_ROUTES.LoginPage} className={styles['register__to-login']}>
          Already have account?
          <span> Log in</span>
        </Link>
      </div>
    </div>
  );
};
