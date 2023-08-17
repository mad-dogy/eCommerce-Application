import { Logo } from '../../../components/Logo/Logo';
import { Button } from '../../../components/UI/Button/Button';
import { DatePicker } from '../../../components/UI/inputs/DatePicker/DatePicker';
import { TextInput } from '../../../components/UI/inputs/TextInput/TextInput';

import styles from '../RegisterPage.module.scss';

export const ExtendRegisterPage = (): JSX.Element => (
  <div className={styles.register}>
    <div className={styles.register__inner}>
      <Logo />
      <h3 className={styles['register__step-title']}>Extend registration</h3>

      <form className={styles.register__form}>
        <div className={styles['form__personal-info']}>
          <label className={styles.label}>Personal info:</label>
          <TextInput
            placeholder="Enter first name"
            label="First name"
            size="small"
            className={styles.input_default}
          />
          <TextInput
            placeholder="Enter last name"
            label="Last name"
            size="small"
            className={styles.input_default}
          />

          <DatePicker label="Date of birth" />
        </div>

        

        <div className={styles['form__address-info']}>
          <label className={styles.label}>Address info:</label>

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

        <Button variant="contained">Confirm</Button>
      </form>
    </div>

    <div className={styles['register__to-login']}>
      Alredy have account? Click here
    </div>
  </div>
);
