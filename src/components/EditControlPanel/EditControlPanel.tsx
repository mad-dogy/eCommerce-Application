import EditIcon from '@mui/icons-material/Edit';
import { Button } from '../UI/Button/Button';
import styles from './EditControlPanes.module.scss';

export const EditControlPanel = (props: any) => {
  const {
    isEdit, onEditBtnClick, onCancelBtnClick, onSaveBtnClick,
  } = props;

  return (
    <div>
      {isEdit
        ? (
          <div className={styles['confirm-edit-btns']}>
            <Button
              className="button_small"
              variant="outlined"
              type="submit"
              onClick={onSaveBtnClick}
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
        )
        : <EditIcon fontSize="medium" className={styles.edit_btn} onClick={onEditBtnClick} />}
    </div>
  );
};
