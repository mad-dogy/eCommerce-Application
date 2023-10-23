import { CustomerPasswordUpdateInfo } from '../../../entities/CustomerTypes/CustomerUpdateInfo.type';
import { ChangePasswordForm } from '../../Forms/ChangePasswordForm/ChangePasswordForm';

import styles from './ChangePasswordModal.module.scss';

interface ChangePasswordModalProps {
  isPasswordEdit: boolean;
  onPasswordSave: (data: CustomerPasswordUpdateInfo) => Promise<void>;
  onPasswordCancelSave: () => void;
}
export const ChangePasswordModal = (props: ChangePasswordModalProps): JSX.Element => {
  const { isPasswordEdit, onPasswordSave, onPasswordCancelSave } = props;
  if (!isPasswordEdit) return <div />;
  return (
    <div className={styles.wrapper}>
      <div className={styles.window}>
        <h4>Change password</h4>
        <ChangePasswordForm onFormSubmit={onPasswordSave} onFormCanceling={onPasswordCancelSave} />
      </div>
    </div>
  );
};
