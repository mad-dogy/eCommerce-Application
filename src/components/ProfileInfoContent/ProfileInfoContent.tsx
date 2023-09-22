import { Customer } from '@commercetools/platform-sdk';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PaymentsIcon from '@mui/icons-material/Payments';
import LockIcon from '@mui/icons-material/Lock';
import { selectShippingAddressInfo, selectBillingAddressInfo } from '../../helpers/getAddressesInfo';
import styles from './ProfileInfoContent.module.scss';

interface ProfileInfoContentProps {
  customer: Customer;
}

export const ProfileInfoContent = (props: ProfileInfoContentProps) => {
  const { customer } = props;

  const shippingAddressInfo = selectShippingAddressInfo(customer);
  const billingAddressInfo = selectBillingAddressInfo(customer);

  return (
    <div className={styles.content}>
      <div className={styles['info-block']}>
        <h6>
          <AssignmentIndIcon />
          Personal info
        </h6>

        <div className={styles['info-card']}>
          <div className={styles.item}>
            <span className={styles.item__name}>
              First name
            </span>
            <span>
              {customer.firstName}
            </span>
          </div>

          <div className={styles.item}>
            <span className={styles.item__name}>
              Last name
            </span>
            <span>
              {customer.lastName}
            </span>
          </div>

          <div className={styles.item}>
            <span className={styles.item__name}>
              Date of birth
            </span>
            <span>
              {customer.dateOfBirth}
            </span>
          </div>
        </div>
      </div>

      <div className={styles['info-block']}>
        <h6>
          <LockIcon />
          Account info
        </h6>

        <div className={styles['info-card']}>
          <div className={styles.item}>
            <span className={styles.item__name}>
              Email
            </span>
            <span>
              {customer.email}
            </span>
          </div>

          <div className={styles.item}>
            <span className={styles.item__name}>
              Password
            </span>
            <span>
              {customer.password}
            </span>
          </div>
        </div>
      </div>

      <div className={styles['info-block']}>
        <h6>
          <LocalShippingIcon />
          Shipping address info
        </h6>

        <div className={styles['info-card']}>
          <div className={styles.item}>
            <span className={styles.item__name}>
              Country
            </span>
            <span>
              {shippingAddressInfo.country}
            </span>
          </div>

          <div className={styles.item}>
            <span className={styles.item__name}>
              City
            </span>
            <span>
              {shippingAddressInfo.city}
            </span>
          </div>

          <div className={styles.item}>
            <span className={styles.item__name}>
              Street name
            </span>
            <span>
              {shippingAddressInfo.streetName}
            </span>
          </div>

          <div className={styles.item}>
            <span className={styles.item__name}>
              Postal code
            </span>
            <span>
              {shippingAddressInfo.postalCode}
            </span>
          </div>
        </div>
      </div>

      <div className={styles['info-block']}>
        <h6>
          <PaymentsIcon />
          Billing address info
        </h6>

        <div className={styles['info-card']}>
          <div className={styles.item}>
            <span className={styles.item__name}>
              Country
            </span>
            <span>
              {billingAddressInfo.country}
            </span>
          </div>

          <div className={styles.item}>
            <span className={styles.item__name}>
              City
            </span>
            <span>
              {billingAddressInfo.city}
            </span>
          </div>

          <div className={styles.item}>
            <span className={styles.item__name}>
              Street name
            </span>
            <span>
              {billingAddressInfo.streetName}
            </span>
          </div>

          <div className={styles.item}>
            <span className={styles.item__name}>
              Postal code
            </span>
            <span>
              {billingAddressInfo.postalCode}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
