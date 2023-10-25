import { FormControlLabel, FormGroup, Checkbox as MuiCheckbox } from '@mui/material';

interface CheckboxProps {
  label: string;
  className?: string;
}

export const Checkbox = (props: CheckboxProps): JSX.Element => (
  <FormGroup>
    <FormControlLabel control={<MuiCheckbox size="small" />} {...props} />
  </FormGroup>
);
