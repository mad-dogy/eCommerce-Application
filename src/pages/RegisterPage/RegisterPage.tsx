import { Logo } from '../../components/Logo/Logo';
/* import { Button } from '../../components/UI/Button/Button'; */
import { TextInput } from '../../components/UI/TextInput/TextInput';
import styles from './RegisterPage.module.scss';

export const RegisterPage = (): JSX.Element => {
  return (
    <div className={styles.register}>
      <div className={styles.register__inner}>
        <Logo/>

        <form className={styles.register__form}>
          <TextInput placeholder='Email'/>
          <div className={styles['register__form__personal-info']}>
            <TextInput placeholder='Enter first name' label="First name" className='input_mini'/>
            <TextInput placeholder='Last name' className='input_mini'/>
          </div>
          {/* <Button variant="contained">{'SIGN IN'}</Button> */}
        </form>
      </div>
    </div>
  )
}
