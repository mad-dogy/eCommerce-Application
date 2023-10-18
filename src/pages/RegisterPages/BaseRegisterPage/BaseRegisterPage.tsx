import { Link, useNavigate } from 'react-router-dom';
import { type CustomerDraft } from '@commercetools/platform-sdk';
import { Logo } from '../../../components/Logo/Logo';
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from '../../../constants/routes';
import { signUp } from '../../../api/Customers/Authorization';
import { BaseRegisterForm } from '../../../components/Forms/BaseRegisterForm/BaseRegisterForm';
import { LOCAL_STORAGE_KEYS } from '../../../constants/constants';
import { authSlice } from '../../../store/reducers/authSlice';
import { useAppDispatch } from '../../../hooks/redux';
import styles from '../RegisterPage.module.scss';

const { setAuth } = authSlice.actions;

export const BaseRegisterPage = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit = async (data: CustomerDraft): Promise<void> => {
    try {
      const customerId = await signUp(data);
      dispatch(setAuth(true));
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
