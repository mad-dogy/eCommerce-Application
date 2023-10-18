import { useNavigate } from 'react-router-dom';
import { modifyToCorrectDate } from '../../../helpers/modifyToCorrectDate';
import { setCustomerExtendInfo } from '../../../api/Customers/Authorization';
import { type CustomerExtendInfo } from '../../../entities/CustomerTypes/CustomerExtendInfo.type';
import { PRIVATE_ROUTES } from '../../../constants/routes';
import { ExtendRegisterForm } from '../../../components/Forms/ExtendRegisterForm/ExtendRegisterForm';
import { LOCAL_STORAGE_KEYS } from '../../../constants/constants';
import styles from '../RegisterPage.module.scss';

export const ExtendRegisterPage = (): JSX.Element => {
  const navigate = useNavigate();
  const customerId = localStorage.getItem(LOCAL_STORAGE_KEYS.customerId);

  const onSubmit = async (data: CustomerExtendInfo): Promise<void> => {
    try {
      data.dateOfBirth = modifyToCorrectDate(data.dateOfBirth);
      await setCustomerExtendInfo(customerId, data);
      navigate(PRIVATE_ROUTES.Base);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className={styles.register__inner}>
      <div className={styles.content}>
        <h3 className={styles['register__step-title']}>Extend registration</h3>

        <ExtendRegisterForm onFormSubmit={onSubmit} />
      </div>
    </div>
  );
};
