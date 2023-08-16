import { Logo } from '../../components/Logo/Logo';
import { Button } from '../../components/UI/Button/Button';
import { DatePicker } from '../../components/UI/inputs/DatePicker/DatePicker';
import { PasswordInput } from '../../components/UI/inputs/PasswordInput/PasswordInput';
import { TextInput } from '../../components/UI/inputs/TextInput/TextInput';
import styles from './RegisterPage.module.scss';

export const RegisterPage = (): JSX.Element => (
  <div className={styles.register}>
    <div className={styles.register__inner}>
      <Logo />

      <form className={styles.register__form}>
        <TextInput
          placeholder="Enter your email"
          label="Email"
          size="small"
          className={styles.input_default}
        />

        <div className={styles['form__personal-info']}>
          <TextInput
            placeholder="Enter first name"
            label="First name"
            size="small"
            className={styles.input_mini}
          />
          <TextInput
            placeholder="Enter last name"
            label="Last name"
            size="small"
            className={styles.input_mini}
          />
        </div>

        <DatePicker label="Date of birth" />

        <div className={styles['form__address-info']}>
          <div className={styles['form__address-info__child']}>
            <TextInput
              placeholder="Enter country"
              label="Country"
              size="small"
              className={styles.input_mini}
            />
            <TextInput
              placeholder="Enter city"
              label="City"
              size="small"
              className={styles.input_mini}
            />
          </div>
          <div className={styles['form__address-info__child']}>
            <TextInput
              placeholder="Enter street"
              label="Street"
              size="small"
              className={styles.input_mini}
            />
            <TextInput
              placeholder="Enter postal code"
              label="Postal code"
              size="small"
              className={styles.input_mini}
            />
          </div>
        </div>

        <div className={styles['form__password-info']}>
          <PasswordInput
            placeholder="Enter password"
            label="Password"
            size="small"
            className={styles.input_default}
          />
          <PasswordInput
            placeholder="Confirm password"
            label="Confirm password"
            size="small"
            className={styles.input_default}
          />
        </div>

        <Button variant="contained">SIGN IN</Button>
      </form>
    </div>

    <div className={styles['register__to-login']}>
      Alredy have account? Click here
    </div>
  </div>
);
