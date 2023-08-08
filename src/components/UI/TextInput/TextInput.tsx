import { TextField } from '@mui/material';
import { type TextFieldProps } from '@mui/material/TextField/TextField';
import styles from './TextInput.module.scss';
import {type FC} from "react"

interface TextInputProps extends TextFieldProps<'standard'> {

}

export const TextInput: FC<TextInputProps> = (props: TextInputProps) => {
  const {...otherProps} = props;

  return (
    <TextField 
      {...otherProps}
      InputProps={{
        className: styles.input
      }}
    />
  )
}