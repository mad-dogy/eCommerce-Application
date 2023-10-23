import { Button as MuiButton } from '@mui/material';
import { type FC } from 'react';
import { type ButtonProps as MuiButtonProps } from '@mui/material/Button/Button';

import styles from './Button.module.scss';

type ButtonProps = MuiButtonProps;

export const Button: FC<ButtonProps> = (props: ButtonProps) => {
  const { ...otherProps } = props;

  return <MuiButton className={styles.button} {...otherProps} />;
};
