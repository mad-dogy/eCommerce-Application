import { Link, useNavigate } from 'react-router-dom';

import { Logo } from '../../../components/Logo/Logo';
import { SignUpProps } from '../../../api/Customers/Authorization';
import { BaseRegisterForm } from '../../../components/Forms/BaseRegisterForm/BaseRegisterForm';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { fetchSignUp } from '../../../store/reducers/actionCreators/authActionCreators';
import { Loader } from '../../../components/UI/Loader/Loader';
import { ROUTES } from '../../../constants/routes';
import styles from '../RegisterPage.module.scss';
import { getAuthLoading } from '../../../store/selectors/getAuthFields/getAuthLoading';

export const BaseRegisterPage = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const isLoading = useAppSelector(getAuthLoading);

  const onSignUp = async (data: SignUpProps): Promise<void> => {
    try {
      await dispatch(fetchSignUp(data));
      navigate(ROUTES.extendRegister());
    } catch (error) {}
  };

  let content;
  if (isLoading) {
    content = <Loader />;
  } else {
    content = (
      <div>
        <h3 className={styles['register__step-title']}>Registration</h3>

        <BaseRegisterForm className={styles.register__form} onFormSubmit={onSignUp} />

        <Link to={ROUTES.login()} className={styles['register__to-login']}>
          Already have account?
          <span> Log in</span>
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.register__inner}>
      <Logo />
      <div className={styles.content}>{content}</div>
    </div>
  );
};
