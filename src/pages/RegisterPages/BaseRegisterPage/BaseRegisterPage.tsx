import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Logo } from '../../../components/Logo/Logo';
import { Button } from '../../../components/UI/Button/Button';
import { PasswordInput } from '../../../components/UI/inputs/PasswordInput/PasswordInput';
import { TextInput } from '../../../components/UI/inputs/TextInput/TextInput';

import styles from '../RegisterPage.module.scss';

export const BaseRegisterPage = (): JSX.Element => (
  <div className={styles.register}>
    <div className={styles.register__inner}>
      <Logo />
      <h3 className={styles['register__step-title']}>Base registration</h3>

      <form className={styles.register__form}>
        <TextInput
          placeholder="Enter your email"
          label="Email"
          size="small"
          className={styles.input_default}
        />

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
        <div className={styles.register__btns}>
          <Button variant="contained">SIGN IN</Button>
          <Button variant="contained">
            <ArrowForwardIcon />
          </Button>
        </div>
      </form>
    </div>

    <div className={styles['register__to-login']}>
      Alredy have account? Click here
    </div>
  </div>
);
