/* eslint-disable @typescript-eslint/no-misused-promises */
import { useForm, Controller } from 'react-hook-form';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Logo } from '../../../components/Logo/Logo';
import { Button } from '../../../components/UI/Button/Button';
import { PasswordInput } from '../../../components/UI/inputs/PasswordInput/PasswordInput';
import { TextInput } from '../../../components/UI/inputs/TextInput/TextInput';

import styles from '../RegisterPage.module.scss';

export const BaseRegisterPage = (): JSX.Element => {
  const {
    control,
    register,
    formState: {
      errors,
    },
    handleSubmit,
  } = useForm();

  const onSubmit = (data: unknown): void => {
    alert(JSON.stringify(data));
  };

  return (
    <div className={styles.register}>
      <div className={styles.register__inner}>
        <Logo />
        <h3 className={styles['register__step-title']}>Base registration</h3>

        <form className={styles.register__form} onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="email"
            control={control}
            {...register('email', {
              required: 'Field is required',
            })}
            render={({ field }) => (
              <TextInput
                {...field as any}
                placeholder="Enter your email"
                label="Email"
                size="small"
                className={styles.input_default}
                error={Boolean(errors?.email?.message)}
                helperText={String(errors?.email?.message ?? '')}
              />
            )}
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
            <Button variant="contained" type="submit">SIGN IN</Button>
            <Button variant="contained" onClick={() => { console.log(errors); }}>
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
};
