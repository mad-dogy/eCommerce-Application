import { Button as MuiButton } from '@mui/material';
import { type FC } from 'react';
import { type ButtonProps as MuiButtonProps } from "@mui/material/Button/Button";

interface ButtonProps extends MuiButtonProps {

}

export const Button: FC<ButtonProps> = (props: ButtonProps) => {
  const {variant, ...otherProps} = props;

  return (
    <MuiButton {...otherProps}></MuiButton>
  )
}