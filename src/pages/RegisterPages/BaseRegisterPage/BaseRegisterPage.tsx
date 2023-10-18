import { Link, useNavigate } from 'react-router-dom';
import { Logo } from '../../../components/Logo/Logo';
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from '../../../constants/routes';
import { SignUpProps } from '../../../api/Customers/Authorization';
import { BaseRegisterForm } from '../../../components/Forms/BaseRegisterForm/BaseRegisterForm';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { fetchSignUp } from '../../../store/reducers/actionCreators/authActionCreators';
import { Loader } from '../../../components/UI/Loader/Loader';
import styles from '../RegisterPage.module.scss';

export const BaseRegisterPage = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { error, isLoading, isAuth } = useAppSelector(state => state.authReducer);

  const onSignUp = async (data: SignUpProps): Promise<void> => {
    dispatch(fetchSignUp(data)).then(() => {
      console.log(isAuth)

      if (!error) {
        navigate(PRIVATE_ROUTES.ExtendRegisterPage);
      }
    });
  };

  let content;
  if(isLoading) {
    content = <Loader />
  } else {
    content = (
      <div className={styles.content}>
        <h3 className={styles['register__step-title']}>Registration</h3>

        <BaseRegisterForm className={styles.register__form} onFormSubmit={onSignUp} />

        <Link to={PUBLIC_ROUTES.LoginPage} className={styles['register__to-login']}>
          Already have account?
          <span> Log in</span>
        </Link>
      </div>
    )
  }

  return (
    <div className={styles.register__inner}>
      <Logo />
      {content}
    </div>
  );
};
