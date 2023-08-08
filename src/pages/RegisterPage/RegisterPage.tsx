import { Logo } from '../../components/Logo/Logo';
import { TextInput } from '../../components/UI/TextInput/TextInput';
import styles from './RegisterPage.module.scss';

export const RegisterPage = (): JSX.Element => {
  return (
    <div className={styles.register}>
      <div className={styles.register__inner}>
        <Logo/>

        <form className={styles.register__form}>
          <TextInput id='emailInput' placeholder='Email'/>
        </form>
      </div>
    </div>
  )
}