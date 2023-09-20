import { useEffect, useState } from 'react';
import { getCustomerById } from '../../api/Customers/GetCustomerInfoActions';
import styles from './ProfilePage.module.scss';
import { Loader } from '../../components/UI/Loader/Loader';
import { EditInfoBtn } from '../../components/UI/EditInfoButton/EditInfoBtn';
import { TextInput } from '../../components/UI/inputs/TextInput/TextInput';
import { PROFILE_EMPTY_SYMBOL } from '../../constants/constants';
import { Button } from '../../components/UI/Button/Button';

export const ProfilePage = (): JSX.Element => {
  const [customer, setCustomer] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const getCustomerInfo = async (): Promise<void> => {
      const customerInfo = await getCustomerById(localStorage.getItem('customerId'));
      setCustomer(customerInfo);
    };

    getCustomerInfo().then(() => {
      setLoading(false);
    }).catch(() => {});
  }, []);

  return (
    <div className={styles.profile}>
      {isLoading
        ? <Loader />
        : (
          <div className={styles.profile__inner}>
            <h4>PERSONAL ACCOUNT</h4>

            <div className={styles.profile__content}>
              <div className={styles['profile__info-block']}>
                <h6>
                  Personal info
                  {/* <EditInfoBtn /> */}

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
                  >
                    Cancel
                  </Button>

                </h6>

                <div className={styles['personal-info']}>
                  <div className={styles.item}>
                    <span className={styles.item__name}>
                      First name
                    </span>
                    <span>

                      <TextInput
                        size="small"
                        placeholder={customer.firstName}
                        label=""
                      />

                      {/* {customer.firstName || PROFILE_EMPTY_SYMBOL} */}
                    </span>
                  </div>

                  <div className={styles.item}>
                    <span className={styles.item__name}>
                      Last name
                    </span>
                    <span>

                      <TextInput
                        size="small"
                        placeholder={customer.lastName}
                        label=""
                      />

                      {/* {customer.lastName ?? PROFILE_EMPTY_SYMBOL} */}
                    </span>
                  </div>

                  <div className={styles.item}>
                    <span className={styles.item__name}>
                      Date of birth
                    </span>
                    <span>
                      <TextInput
                        size="small"
                        placeholder={customer.dateOfBirth}
                        label=""
                      />

                      {/* {customer.dateOfBirth ?? PROFILE_EMPTY_SYMBOL} */}
                    </span>
                  </div>
                </div>
              </div>

              <div className={styles['profile__info-block']}>
                <h6>
                  Account info
                  <EditInfoBtn />
                </h6>

                <div className={styles['account-info']}>
                  <div className={styles.item}>
                    <span className={styles.item__name}>
                      Email
                    </span>
                    <span>{customer.email}</span>
                  </div>

                  <div className={styles.item}>
                    <span className={styles.item__name}>
                      Password
                    </span>
                    <span>{customer.password}</span>
                  </div>
                </div>
              </div>

              <div className={styles['profile__info-block']}>
                <h6>
                  Account info
                  <EditInfoBtn />
                </h6>

                <div className={styles['personal-info']}>
                  <div className={styles.item}>
                    <span className={styles.item__name}>
                      Email
                    </span>
                    <span>lola@gmail.com</span>
                  </div>

                  <div className={styles.item}>
                    <span className={styles.item__name}>
                      Password
                    </span>
                    <span>24-08-2005</span>
                  </div>

                  <div className={styles.item}>
                    <span className={styles.item__name}>
                      Email
                    </span>
                    <span>lola@gmail.com</span>
                  </div>

                  <div className={styles.item}>
                    <span className={styles.item__name}>
                      Email
                    </span>
                    <span>lola@gmail.com</span>
                  </div>

                  <div className={styles.item}>
                    <span className={styles.item__name}>
                      Email
                    </span>
                    <span>lola@gmail.com</span>
                  </div>

                  <div className={styles.item}>
                    <span className={styles.item__name}>
                      Email
                    </span>
                    <span>lola@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        )}
    </div>
  );
};
