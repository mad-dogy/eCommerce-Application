import { Logo } from '../../components/Logo/Logo';
import { Button } from '../../components/UI/Button/Button';
import { PasswordInput } from '../../components/UI/inputs/PasswordInput/PasswordInput';
import { TextInput } from '../../components/UI/inputs/TextInput/TextInput';
import styles from './LoginPage.module.scss';

export const LoginPage = (): JSX.Element => (
  <div className={styles.login}>
    <div className={styles.login__inner}>
      <Logo />

      <form className={styles.login__form}>
        <TextInput
          placeholder="Enter your email"
          label="Email"
          size="small"
          className={styles.input_default}
        />

        <PasswordInput
          placeholder="Enter password"
          label="Password"
          size="small"
          className={styles.input_default}
        />

        <Button variant="contained">LOG IN</Button>
      </form>
    </div>

    <div className={styles['login__to-register']}>
      Do not have an account? Click here
    </div>
  </div>
);
