import { TextField } from '@mui/material';
import {type FC} from "react"
import { type TextFieldProps } from '@mui/material/TextField/TextField';
import styles from './PasswordInput.module.scss';

interface PasswordInputProps extends TextFieldProps<'standard'> {

}

export const PasswordInput: FC<PasswordInputProps> = (props: PasswordInputProps) => {
  const {...otherProps} = props;

  return (
    <TextField
      type='password'
      InputProps={{
      className: styles.input
      }}
      {...otherProps}
    />
  )
}