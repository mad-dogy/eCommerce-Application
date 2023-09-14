import EditIcon from '@mui/icons-material/Edit';
import { type Customer } from '@commercetools/platform-sdk';
import { useEffect } from 'react';
import { getCustomerById } from '../../api/Customers/GetCustomerInfoActions';
import styles from './ProfilePage.module.scss';

export const ProfilePage = (): JSX.Element => {
  console.log(0);
  let customerInfo: Customer;
  console.log(1);

  useEffect(() => {
    const getCustomerInfo = async (): Promise<void> => {
      customerInfo = await getCustomerById(localStorage.getItem('customerId'));
      console.log(2, customerInfo);
    };
    void getCustomerInfo();
  }, []);
  console.log(3);

  return (
    <div className={styles.profile}>
      <div className={styles.profile__inner}>
        <h4>PERSONAL ACCOUNT</h4>

        <div className={styles['profile__info-block']}>
          <h6>Personal info</h6>
          <div className={styles['personal-info']}>
            <div className={styles.item}>
              <span className={styles.item__name}>
                First name
                <EditIcon fontSize="small" />
              </span>
              <span>
                {customerInfo.firstName}
              </span>
            </div>

            <div className={styles.item}>
              <span className={styles.item__name}>
                Last name
                <EditIcon fontSize="small" />
              </span>
              <span>
                {customerInfo.lastName}
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
    </div>
  );
};
