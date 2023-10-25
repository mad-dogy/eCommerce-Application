import { useEffect } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';

import { Loader } from '../../components/UI/Loader/Loader';
import { EditPersonalInfoForm } from '../../components/Forms/EditPersonalInfoForm/EditPersonalInfoForm';
import { modifyToCorrectDate } from '../../helpers/modifyToCorrectDate';
import { ProfileInfoContent } from '../../components/ProfileInfoContent/ProfileInfoContent';
import {
  CustomerPasswordUpdateInfo,
  CustomerUpdateInfo
} from '../../entities/CustomerTypes/CustomerUpdateInfo.type';
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
import {
  fetchChangeCustomerPassword,
  fetchCustomer,
  fetchUpdateCustomer
} from '../../store/reducers/actionCreators/profileActionCreators';
import { getProfileCustomerId } from '../../store/selectors/getProfileFields.ts/getProfileCustomerId';

import styles from './ProfilePage.module.scss';

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
  }, [isInfoEdit, isPasswordEdit]);

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

  const onPasswordSaveBtnClick = async (data: CustomerPasswordUpdateInfo) => {
    dispatch(fetchChangeCustomerPassword(customer, data));
  };

  const onSaveBtnClick = async (data: CustomerUpdateInfo) => {
    dispatch(
      fetchUpdateCustomer(customerId, {
        ...data,
        dateOfBirth: modifyToCorrectDate(data.dateOfBirth)
      })
    );
  };

  const onDeleteAccount = async (): Promise<void> => {
    const isDelete = confirm('Are you sure that you want to delete an account?');

    if (isDelete) {
      dispatch(fetchDeleteCustomerAccount(customer)).catch((error) => alert(error));
      if (!error) {
        navigate(ROUTES.main());
      }
    }
  };

  const profileInfoContent = customer ? (
    <ProfileInfoContent
      customer={customer}
      onChangePasswordBtnClick={onChangePasswordBtnClick}
      onDeleteBtnClick={onDeleteAccount}
    />
  ) : null;

  let content;
  if (!isLoading) {
    content = (
      <div className={styles.profile__inner}>
        <div className={styles.profile__a}>
          <h4>PERSONAL ACCOUNT</h4>

          {isInfoEdit ? (
            <span />
          ) : (
            <EditIcon fontSize="medium" className={styles.edit_btn} onClick={onEditBtnClick} />
          )}
        </div>

        {isInfoEdit ? (
          <EditPersonalInfoForm
            onSubmit={onSaveBtnClick}
            onCancelBtnClick={onCancelBtnClick}
            customer={customer}
          />
        ) : (
          profileInfoContent
        )}

        <ChangePasswordModal
          onPasswordCancelSave={onPasswordCancelBtnClick}
          onPasswordSave={onPasswordSaveBtnClick}
          isPasswordEdit={isPasswordEdit}
        />
      </div>
    );
  }

  return <div className={styles.profile}>{isLoading ? <Loader /> : content}</div>;
};
