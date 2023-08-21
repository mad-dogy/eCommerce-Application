import {
  FormControl, InputLabel, MenuItem, Select as MuiSelect,
} from '@mui/material';
import { type FC } from 'react';
import { type SelectProps as MuiSelectProps } from '@mui/material/Select/Select';
import styles from './Select.module.scss';

interface SelectItem {
  value: string;
  name: string;
}

interface SelectProps extends MuiSelectProps {
  label: string;
  selectItems: SelectItem[];
  error: boolean;
  helperText: string;
}

export const Select: FC<SelectProps> = (props: SelectProps) => {
  const { selectItems, label, error, ...otherProps } = props;

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label" className={styles['input-label']}>{label}</InputLabel>
      <MuiSelect
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label={label}
        className={styles.select}
        error={error}
        {...otherProps}
      >
        {selectItems.map(item => <MenuItem value={item.value}>{item.name}</MenuItem>)}

      </MuiSelect>
    </FormControl>
  );
};
