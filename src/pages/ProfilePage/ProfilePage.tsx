import EditIcon from '@mui/icons-material/Edit';
import { type Customer } from '@commercetools/platform-sdk';
import styles from './ProfilePage.module.scss';
import { getCustomerById } from '../../api/Customers/GetCustomerInfoActions';

export const ProfilePage = (): JSX.Element =>
  /* const customerInfo: Customer = await getCustomerById(); */
  (
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
              <span>Lolita</span>
            </div>

            <div className={styles.item}>
              <span className={styles.item__name}>
                Last name
                <EditIcon fontSize="small" />
              </span>
              <span>Cher</span>
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
