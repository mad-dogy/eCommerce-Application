import { useEffect, useState } from 'react';
import { type Customer } from '@commercetools/platform-sdk';
import { getCustomerById } from '../../api/Customers/GetCustomerInfoActions';
import { Loader } from '../../components/UI/Loader/Loader';
import styles from './ProfilePage.module.scss';
import { EditPersonalInfoForm } from '../../components/Forms/EditPersonalInfoForm/EditPersonalInfoForm';
import { ProfileInfoContent } from '../../components/ProfileInfoContent/ProfileInfoContent';
import { EditControlPanel } from '../../components/EditControlPanel/EditControlPanel';

export const ProfilePage = (): JSX.Element => {
  const [customer, setCustomer] = useState<Customer>();
  const [isLoading, setLoading] = useState(true);
  const [isInfoEdit, setInfoEdit] = useState(false);

  useEffect(() => {
    const getCustomerInfo = async () => {
      setLoading(true);
      const customerId = localStorage.getItem('customerId');
      const customerInfo = await getCustomerById(customerId);
      setCustomer(customerInfo);
      setLoading(false);
    };

    getCustomerInfo().catch(() => {});
  }, []);

  const onEditBtnClick = (): void => {
    setInfoEdit(true);
  };
  const onCancelBtnClick = (): void => {
    setInfoEdit(false);
  };
  const onSaveBtnClick = (): void => {
    setInfoEdit(false);
  };

  return (
    <div className={styles.profile}>
      {isLoading
        ? <Loader />
        : (
          <div className={styles.profile__inner}>
            <h4>
              PERSONAL ACCOUNT
              <EditControlPanel
                isEdit={isInfoEdit}
                onEditBtnClick={onEditBtnClick}
                onCancelBtnClick={onCancelBtnClick}
                onSaveBtnClick={onSaveBtnClick}
              />
            </h4>

            {isInfoEdit
              ? (
                <EditPersonalInfoForm customer={customer} />
              )
              : <ProfileInfoContent customer={customer} /> }

          </div>
        )}
    </div>
  );
};
