import { Logo } from '../../components/Logo/Logo';
import { Button } from '../../components/UI/Button/Button';
import { PasswordInput } from '../../components/UI/PasswordInput/PasswordInput';
import { TextInput } from '../../components/UI/TextInput/TextInput';
import styles from './RegisterPage.module.scss';

export const RegisterPage = (): JSX.Element => {
  return (
    <div className={styles.register}>
      <div className={styles.register__inner}>
        <Logo/>

        <form className={styles.register__form}>
          <TextInput placeholder='Enter your email' label='Email' className={styles.input_default}/>

          <div className={styles['form__personal-info']}>
            <TextInput placeholder='Enter first name' label="First name" className={styles.input_mini}/>
            <TextInput placeholder='Enter last name' label="Last name" className={styles.input_mini}/>
          </div>
          
          <TextInput placeholder='Enter date of birth' label='Date of birth' className={styles.input_default}/>

          <div className={styles['form__address-info']}>
            <div className={styles['form__address-info__child']}>
              <TextInput placeholder='Enter country' label="Country" className={styles.input_mini}/>
              <TextInput placeholder='Enter city' label="City" className={styles.input_mini}/>
            </div>
            <div className={styles['form__address-info__child']}>
              <TextInput placeholder='Enter street' label="Street" className={styles.input_mini}/>
              <TextInput placeholder='Enter postal code' label="Postal code" className={styles.input_mini}/>
            </div>
          </div>

          <div className={styles['form__password-info']}>
            <PasswordInput placeholder='Enter password' label="Password" className={styles.input_default}/>
            <PasswordInput placeholder='Confirm password' label="Confirm password" className={styles.input_default}/>
          </div>

          <Button variant="contained">{'SIGN IN'}</Button>
        </form>
      </div>
    </div>
  )
}
