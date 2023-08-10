import { TextField } from '@mui/material';
import { type FC } from 'react';
import { type TextFieldProps } from '@mui/material/TextField/TextField';
import styles from '../inputs.module.scss';

interface PasswordInputProps extends TextFieldProps<'standard'> {
  placeholder: string,
  label: string
}

export const PasswordInput: FC<PasswordInputProps> = (props: PasswordInputProps) => {
  const { placeholder, label, ...otherProps } = props;

  return (
    <TextField
      type="password"
      placeholder={placeholder}
      label={label}
      InputProps={{
        className: styles.input,
      }}
      {...otherProps}
    />
  );
};
