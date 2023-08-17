import { Button as MuiButton } from '@mui/material';
import { type FC } from 'react';
import { type ButtonProps as MuiButtonProps } from '@mui/material/Button/Button';
import styles from './Button.module.scss';

interface ButtonProps extends MuiButtonProps {

}

export const Button: FC<ButtonProps> = (props: ButtonProps) => {
  const { variant, ...otherProps } = props;

  return (
    <MuiButton
      variant={variant}
      className={styles.button}
      {...otherProps}
    />
  );
};
