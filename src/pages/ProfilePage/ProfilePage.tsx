import { useEffect } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';
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
import { ROUTES } from '../../constants/routes';
import { getProfileCustomer } from '../../store/selectors/getProfileFields.ts/getProfileCustomer';
import { getProfileLoading } from '../../store/selectors/getProfileFields.ts/getProfileLoading';
import { getProfileError } from '../../store/selectors/getProfileFields.ts/getProfileError';
import { getProfileInfoEdit } from '../../store/selectors/getProfileFields.ts/getProfileInfoEdit';
import { getProfilePasswordEdit } from '../../store/selectors/getProfileFields.ts/getProfilePasswordEdit';
import { profileSlice } from '../../store/reducers/profileSlice';
import { fetchCustomer } from '../../store/reducers/actionCreators/profileActionCreators';
import styles from './ProfilePage.module.scss';
import { getProfileCustomerId } from '../../store/selectors/getProfileFields.ts/getProfileCustomerId';

const { setInfoEdit, setPasswordEdit } = profileSlice.actions;

export const ProfilePage = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const customer = useAppSelector(getProfileCustomer);
  const customerId = useAppSelector(getProfileCustomerId);
  const isInfoEdit = useAppSelector(getProfileInfoEdit);
  const isPasswordEdit = useAppSelector(getProfilePasswordEdit);
  const isLoading = useAppSelector(getProfileLoading);
  const error = useAppSelector(getProfileError);

  useEffect(() => {
    dispatch(fetchCustomer(customerId));
  }, []);

  useEffect(() => {
    dispatch(fetchCustomer(customerId));
  }, [isInfoEdit]);

  const onEditBtnClick = (): void => {
    dispatch(setInfoEdit(true));
  };

  const onCancelBtnClick = (): void => {
    dispatch(setInfoEdit(false));
  };

  const onChangePasswordBtnClick = () => {
    dispatch(setPasswordEdit(true));
  };
  const onPasswordCancelBtnClick = () => {
    dispatch(setPasswordEdit(false));
  };
  const onPasswordSaveBtnClick = async (data: PasswordUpdateInfo) => {
    try {
      await changeCustomerPassword(customer, data);
      dispatch(setPasswordEdit(false));
    } catch (error) {
      alert(error);
    }
  };

  const onSaveBtnClick = async (data: CustomerUpdateInfo) => {
    try {
      data.dateOfBirth = modifyToCorrectDate(data.dateOfBirth);
      await updateCustomerInfo(customerId, data);
      dispatch(setInfoEdit(false));
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
