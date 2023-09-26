import { ChangePasswordForm } from '../Forms/ChangePasswordForm/ChangePasswordForm';
import styles from './ChangePasswordModal.module.scss';

interface ChangePasswordModalProps {
  onPasswordSave: () => void;
  onPasswordCancelSave: () => void;
}
export const ChangePasswordModal = (props: ChangePasswordModalProps): JSX.Element => {
  const { onPasswordSave, onPasswordCancelSave } = props;
  return (
    <div className={styles.wrapper}>
      <div className={styles.window}>
        <h4>Change password</h4>
        <ChangePasswordForm onFormSubmit={onPasswordSave} onFormCanceling={onPasswordCancelSave} />
      </div>
    </div>
  );
};
