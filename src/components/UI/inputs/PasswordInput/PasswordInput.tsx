import { IconButton, InputAdornment, TextField } from '@mui/material';
import { useState, type FC } from 'react';
import { type TextFieldProps } from '@mui/material/TextField/TextField';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import styles from '../inputs.module.scss';

interface PasswordInputProps extends TextFieldProps<'standard'> {
  placeholder: string,
  label: string
}

export const PasswordInput: FC<PasswordInputProps> = (props: PasswordInputProps) => {
  const { placeholder, label, ...otherProps } = props;
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleClickShowPassword = (): void => { setIsPasswordVisible(!isPasswordVisible); };
  const handleMouseDownPassword = (): void => { setIsPasswordVisible(!isPasswordVisible); };

  return (
    <TextField
      type={isPasswordVisible ? 'text' : 'password'}
      placeholder={placeholder}
      label={label}
      InputProps={{
        className: styles.input,
        endAdornment: (
          <button type="button">
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {isPasswordVisible ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          </button>
        ),
      }}
      {...otherProps}
    />
  );
};
