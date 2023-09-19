import { useEffect, useState } from 'react';
import { getCustomerById } from '../../api/Customers/GetCustomerInfoActions';
import styles from './ProfilePage.module.scss';
import { Loader } from '../../components/UI/Loader/Loader';
import { EditInfoBtn } from '../../components/UI/EditInfoButton/EditInfoBtn';
import { TextInput } from '../../components/UI/inputs/TextInput/TextInput';

export const ProfilePage = (): JSX.Element => {
  const [customer, setCustomer] = useState(null);
  const [isLoading, setLoading] = useState(true);

  /* const [fetchCustomer, isLoading, getCustomerError] =
  useFetching(async (customerId: string) => {

    setCustomer(customerInfo);
  }); */

  useEffect(() => {
    /* fetchCustomer(localStorage.getItem('customerId')); */

    const getCustomerInfo = async (): Promise<void> => {
      const customerInfo = await getCustomerById(localStorage.getItem('customerId'));
      setCustomer(customerInfo);
    };

    getCustomerInfo().then(() => {
      setLoading(false);
      console.log('ooo');
    }).catch(() => {});
  }, []);

  return (
    <div className={styles.profile}>
      {isLoading
        ? <Loader />
        : (
          <div className={styles.profile__inner}>
            <h4>PERSONAL ACCOUNT</h4>

            <div className={styles['profile__info-block']}>
              <h6>Personal info</h6>
              <div className={styles['personal-info']}>
                <div className={styles.item}>
                  <span className={styles.item__name}>
                    First name
                    <EditInfoBtn />
                  </span>
                  <span>
                    <TextInput size="small" placeholder={customer.firstName || '-'} label="" />
                    {/* {customer.firstName || '-'} */}
                  </span>
                </div>

                <div className={styles.item}>
                  <span className={styles.item__name}>
                    Last name
                    <EditInfoBtn />
                  </span>
                  <span>
                    {customer.lastName || '-'}
                  </span>
                </div>

                <div className={styles.item}>
                  <span className={styles.item__name}>
                    Date of birth
                    <EditInfoBtn />
                  </span>
                  <span>{customer.dateOfBirth}</span>
                </div>
              </div>
            </div>

            <div className={styles['profile__info-block']}>
              <h6>Account info</h6>
              <div className={styles['account-info']}>
                <div className={styles.item}>
                  <span className={styles.item__name}>
                    Email
                    <EditInfoBtn />
                  </span>
                  <span>{customer.email}</span>
                </div>

                <div className={styles.item}>
                  <span className={styles.item__name}>
                    Password
                    <EditInfoBtn />
                  </span>
                  <span>{customer.password}</span>
                </div>
              </div>
            </div>

            <div className={styles['profile__info-block']}>
              <h6>Account info</h6>
              <div className={styles['personal-info']}>
                <div className={styles.item}>
                  <span className={styles.item__name}>
                    Email
                    <EditInfoBtn />
                  </span>
                  <span>lola@gmail.com</span>
                </div>

                <div className={styles.item}>
                  <span className={styles.item__name}>
                    Password
                    <EditInfoBtn />
                  </span>
                  <span>24-08-2005</span>
                </div>

                <div className={styles.item}>
                  <span className={styles.item__name}>
                    Email
                    <EditInfoBtn />
                  </span>
                  <span>lola@gmail.com</span>
                </div>

                <div className={styles.item}>
                  <span className={styles.item__name}>
                    Email
                    <EditInfoBtn />
                  </span>
                  <span>lola@gmail.com</span>
                </div>

                <div className={styles.item}>
                  <span className={styles.item__name}>
                    Email
                    <EditInfoBtn />
                  </span>
                  <span>lola@gmail.com</span>
                </div>

                <div className={styles.item}>
                  <span className={styles.item__name}>
                    Email
                    <EditInfoBtn />
                  </span>
                  <span>lola@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        )}
    </div>
  );
};
