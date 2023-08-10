import { TextField } from '@mui/material';
import { type TextFieldProps } from '@mui/material/TextField/TextField';
import { type FC } from 'react';
import styles from '../inputs.module.scss';

interface TextInputProps extends TextFieldProps<'standard'> {
  placeholder: string,
  label: string
}

export const TextInput: FC<TextInputProps> = (props: TextInputProps) => {
  const { placeholder, label, ...otherProps } = props;

  return (
    <TextField
      placeholder={placeholder}
      label={label}
      InputProps={{
        className: styles.input,
      }}
      {...otherProps}
    />
  );
};
