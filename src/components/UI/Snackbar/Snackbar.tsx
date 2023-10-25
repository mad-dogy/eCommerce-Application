import { Alert, Snackbar as MuiSnackbar } from '@mui/material';

interface SnackbarProps {
  isOpen: boolean;
  handleClose: () => void;
  message: string;
  status: 'success' | 'error' | 'warning' | 'info';
}

export const Snackbar = (props: SnackbarProps): JSX.Element => {
  const { isOpen, handleClose, message, status } = props;
  return (
    <MuiSnackbar open={isOpen} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity={status} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </MuiSnackbar>
  );
};
