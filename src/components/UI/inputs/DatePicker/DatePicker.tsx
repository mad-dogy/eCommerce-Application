import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker as MuiDatePicker } from '@mui/x-date-pickers';
import { type DatePickerProps as MuiDatePickerProps } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { type FC } from 'react';
import 'dayjs/locale/en';

interface DatePickerProps extends MuiDatePickerProps<Date>{
  label: string,
  error?: boolean,
  helperText?: string
}

export const DatePicker: FC<DatePickerProps> = (props: DatePickerProps) => {
  const {
    ...otherProps
  } = props;
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en">
      <MuiDatePicker
        slotProps={{ textField: { size: 'small' } }}
        {...otherProps}
      />
    </LocalizationProvider>
  );
};
