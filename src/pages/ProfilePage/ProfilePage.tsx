import EditIcon from '@mui/icons-material/Edit';
import { type Customer } from '@commercetools/platform-sdk';
import { useEffect, useState } from 'react';
import { getCustomerById } from '../../api/Customers/GetCustomerInfoActions';
import styles from './ProfilePage.module.scss';
import { Loader } from '../../components/UI/Loader/Loader';
import { useFetching } from '../../hooks/useFetching';

export const ProfilePage = (): JSX.Element => {
  const [customer, setCustomer] = useState(null);
  console.log(1);

  const [fetchCustomer, isLoading, getCustomerError] = useFetching(async (customerId: string) => {
    const customerInfo = await getCustomerById(customerId);
    console.log(customerInfo);
    setCustomer(customerInfo);
  });
  console.log(2);

  useEffect(() => {
    void fetchCustomer(localStorage.getItem('customerId'));
  }, []);
  console.log(3);
  console.log(isLoading);

  return (
    <div className={styles.profile}>
      <div className={styles.profile__inner}>
        <h4>PERSONAL ACCOUNT</h4>

        {isLoading
          ? <Loader />
          : (
            <div>
              <div className={styles['profile__info-block']}>
                <h6>Personal info</h6>
                <div className={styles['personal-info']}>
                  <div className={styles.item}>
                    <span className={styles.item__name}>
                      First name
                      <EditIcon fontSize="small" />
                    </span>
                    <span>
                      {customer.firstName || ''}
                    </span>
                  </div>

                  <div className={styles.item}>
                    <span className={styles.item__name}>
                      Last name
                      <EditIcon fontSize="small" />
                    </span>
                    <span>
                      {customer.lastName || ''}
                    </span>
                  </div>

                  <div className={styles.item}>
                    <span className={styles.item__name}>
                      Date of birth
                      <EditIcon fontSize="small" />
                    </span>
                    <span>24-08-2005</span>
                  </div>
                </div>
              </div>

              <div className={styles['profile__info-block']}>
                <h6>Account info</h6>
                <div className={styles['account-info']}>
                  <div className={styles.item}>
                    <span className={styles.item__name}>
                      Email
                      <EditIcon fontSize="small" />
                    </span>
                    <span>lola@gmail.com</span>
                  </div>

                  <div className={styles.item}>
                    <span className={styles.item__name}>
                      Password
                      <EditIcon fontSize="small" />
                    </span>
                    <span>24-08-2005</span>
                  </div>
                </div>
              </div>

              <div className={styles['profile__info-block']}>
                <h6>Account info</h6>
                <div className={styles['personal-info']}>
                  <div className={styles.item}>
                    <span className={styles.item__name}>
                      Email
                      <EditIcon fontSize="small" />
                    </span>
                    <span>lola@gmail.com</span>
                  </div>

                  <div className={styles.item}>
                    <span className={styles.item__name}>
                      Password
                      <EditIcon fontSize="small" />
                    </span>
                    <span>24-08-2005</span>
                  </div>

                  <div className={styles.item}>
                    <span className={styles.item__name}>
                      Email
                      <EditIcon fontSize="small" />
                    </span>
                    <span>lola@gmail.com</span>
                  </div>

                  <div className={styles.item}>
                    <span className={styles.item__name}>
                      Email
                      <EditIcon fontSize="small" />
                    </span>
                    <span>lola@gmail.com</span>
                  </div>

                  <div className={styles.item}>
                    <span className={styles.item__name}>
                      Email
                      <EditIcon fontSize="small" />
                    </span>
                    <span>lola@gmail.com</span>
                  </div>

                  <div className={styles.item}>
                    <span className={styles.item__name}>
                      Email
                      <EditIcon fontSize="small" />
                    </span>
                    <span>lola@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          )}

      </div>
    </div>
  );
};
