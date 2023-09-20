import { useEffect, useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import { getCustomerById } from '../../api/Customers/GetCustomerInfoActions';
import { Loader } from '../../components/UI/Loader/Loader';
import { PROFILE_DEFAULT_SYMBOL } from '../../constants/constants';
import { Button } from '../../components/UI/Button/Button';
import { ProfileInfoCard } from '../../components/ProfileCard/ProfileCard';
import styles from './ProfilePage.module.scss';

export const ProfilePage = (): JSX.Element => {
  const [customer, setCustomer] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [isInfoEdit, setInfoEdit] = useState(false);

  useEffect(() => {
    const getCustomerInfo = async (): Promise<void> => {
      const customerInfo = await getCustomerById(localStorage.getItem('customerId'));
      setCustomer(customerInfo);
    };

    getCustomerInfo().then(() => {
      setLoading(false);
    }).catch(() => {});
  }, []);

  const onEditBtnClick = (): void => {
    setInfoEdit(true);
  };
  const onCancelBtnClick = (): void => {
    setInfoEdit(false);
  };

  let editBtns;
  if (isInfoEdit) {
    editBtns = (
      <div className={styles['profile__confirm-edit-btns']}>
        <Button
          className="button_small"
          variant="outlined"
        >
          Save
        </Button>
        <Button
          className="button_small"
          variant="outlined"
          color="warning"
          onClick={onCancelBtnClick}
        >
          Cancel
        </Button>
      </div>
    );
  } else {
    editBtns = <EditIcon fontSize="medium" className={styles.profile__edit_btn} onClick={onEditBtnClick} />;
  }

  return (
    <div className={styles.profile}>
      {isLoading
        ? <Loader />
        : (
          <div className={styles.profile__inner}>
            <h4>
              PERSONAL ACCOUNT
              {editBtns}
            </h4>

            <div className={styles.profile__content}>
              <div className={styles['profile__info-block']}>
                <h6>
                  Personal info
                </h6>

                <ProfileInfoCard
                  isEdit={isInfoEdit}
                  cardInfo={[
                    { 'First name': customer.firstName ?? PROFILE_DEFAULT_SYMBOL },
                    { 'Last name': customer.lastName ?? PROFILE_DEFAULT_SYMBOL },
                    { 'Date of birth': customer.dateOfBirth ?? PROFILE_DEFAULT_SYMBOL },
                  ]}
                />
              </div>

              <div className={styles['profile__info-block']}>
                <h6>
                  Account info
                </h6>

                <ProfileInfoCard
                  isEdit={isInfoEdit}
                  cardInfo={[
                    { Email: customer.email },
                    { Password: customer.password },
                  ]}
                />
              </div>

              <div className={styles['profile__info-block']}>
                <h6>
                  Shipping address info
                </h6>

                <ProfileInfoCard
                  isEdit={isInfoEdit}
                  cardInfo={[
                    { 'First name': customer.firstName ?? PROFILE_DEFAULT_SYMBOL },
                    { 'Last name': customer.lastName ?? PROFILE_DEFAULT_SYMBOL },
                    { 'Date of birth': customer.dateOfBirth ?? PROFILE_DEFAULT_SYMBOL },
                  ]}
                />
              </div>

              <div className={styles['profile__info-block']}>
                <h6>
                  Billing address info
                </h6>

                <ProfileInfoCard
                  isEdit={isInfoEdit}
                  cardInfo={[
                    { 'First name': customer.firstName ?? PROFILE_DEFAULT_SYMBOL },
                    { 'Last name': customer.lastName ?? PROFILE_DEFAULT_SYMBOL },
                    { 'Date of birth': customer.dateOfBirth ?? PROFILE_DEFAULT_SYMBOL },
                  ]}
                />
              </div>
            </div>

          </div>
        )}
    </div>
  );
};
