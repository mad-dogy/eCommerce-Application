import {
  useCallback, useEffect, useState,
} from 'react';
import { type Customer } from '@commercetools/platform-sdk';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';
import { getCustomerById } from '../../api/Customers/GetCustomerInfoActions';
import { Loader } from '../../components/UI/Loader/Loader';
import { EditPersonalInfoForm } from '../../components/Forms/EditPersonalInfoForm/EditPersonalInfoForm';
import { modifyToCorrectDate } from '../../helpers/modifyToCorrectDate';
import { changeCustomerPassword, updateCustomerInfo } from '../../api/Customers/CustomerUpdateActions';
import { ProfileInfoContent } from '../../components/ProfileInfoContent/ProfileInfoContent';
import { LOCAL_STORAGE_KEYS } from '../../constants/constants';
import { CustomerUpdateInfo, PasswordUpdateInfo } from '../../entities/CustomerTypes/CustomerUpdateInfo.type';
import { ChangePasswordModal } from '../../components/ModalWindows/ChangePasswordModal/ChangePasswordModal';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchDeleteCustomerAccount } from '../../store/reducers/actionCreators/authActionCreators';
import styles from './ProfilePage.module.scss';
import { getAuthError } from '../../store/selectors/getAuthFields/getAuthError';
import { ROUTES } from '../../constants/routes';

export const ProfilePage = (): JSX.Element => {
  const [customer, setCustomer] = useState<Customer>();
  const [isLoading, setLoading] = useState(true);
  const [isInfoEdit, setInfoEdit] = useState(false);
  const [isPasswordEdit, setPasswordEdit] = useState(false);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const error = useAppSelector(getAuthError);

  useEffect(() => {
    const getCustomerInfo = async () => {
      setLoading(true);
      const customerId = localStorage.getItem(LOCAL_STORAGE_KEYS.customerId);
      const customerInfo = await getCustomerById(customerId);
      setCustomer(customerInfo);
      setLoading(false);
    };

    getCustomerInfo().catch((error) => { alert(error); });
  }, []);

  useEffect(() => {
    const getCustomerInfo = async () => {
      setLoading(true);
      const customerId = localStorage.getItem(LOCAL_STORAGE_KEYS.customerId);
      const customerInfo = await getCustomerById(customerId);
      setCustomer(customerInfo);
      setLoading(false);
    };

    getCustomerInfo().catch(() => {});
  }, [isInfoEdit]);

  const onEditBtnClick = useCallback((): void => {
    setInfoEdit(true);
  }, [setInfoEdit]);

  const onCancelBtnClick = useCallback((): void => {
    setInfoEdit(false);
  }, [setInfoEdit]);

  const onChangePasswordBtnClick = () => {
    setPasswordEdit(true);
  };
  const onPasswordCancelBtnClick = () => {
    setPasswordEdit(false);
  };
  const onPasswordSaveBtnClick = async (data: PasswordUpdateInfo) => {
    try {
      await changeCustomerPassword(customer, data);
      setPasswordEdit(false);
    } catch (error) {
      alert(error);
    }
  };

  const onSaveBtnClick = async (data: CustomerUpdateInfo) => {
    try {
      data.dateOfBirth = modifyToCorrectDate(data.dateOfBirth);
      const customerId = localStorage.getItem(LOCAL_STORAGE_KEYS.customerId);
      await updateCustomerInfo(customerId, data);
      setInfoEdit(false);
    } catch (error) {
      alert(error);
    }
  };

  const onDeleteAccount = async (): Promise<void> => {
    const isDelete = confirm('Are you sure that you want to delete an account?');

    if (isDelete) {
      dispatch(fetchDeleteCustomerAccount(customer));
      if (!error) {
        navigate(ROUTES.Base);
      }
    }
  };

  return (
    <div className={styles.profile}>
      {isLoading
        ? <Loader />
        : (
          <div className={styles.profile__inner}>
            <h4>
              PERSONAL ACCOUNT
              {isInfoEdit
                ? <span />
                : <EditIcon fontSize="medium" className={styles.edit_btn} onClick={onEditBtnClick} />}
            </h4>

            {isInfoEdit
              ? (
                <EditPersonalInfoForm
                  onSubmit={onSaveBtnClick}
                  onCancelBtnClick={onCancelBtnClick}
                  customer={customer}
                />
              )
              : (
                <ProfileInfoContent
                  customer={customer}
                  onChangePasswordBtnClick={onChangePasswordBtnClick}
                  onDeleteBtnClick={onDeleteAccount}
                />
              ) }

            {isPasswordEdit
              ? (
                <ChangePasswordModal
                  onPasswordCancelSave={onPasswordCancelBtnClick}
                  onPasswordSave={onPasswordSaveBtnClick}
                />
              )
              : <div />}
          </div>
        )}
    </div>
  );
};
