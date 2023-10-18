import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

interface SearchInputProps {
  searchValue: string;
  onSearchValueChange: (value: string) => void;
}

export const SearchInput = (props: SearchInputProps) => {
  const { searchValue, onSearchValueChange } = props;

  const onChangeSearchInputValue = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    onSearchValueChange(event.target.value);
  };

  return (
    <Paper
      component="form"
      sx={{
        p: '0 2px', display: 'flex', alignItems: 'center', maxWidth: 600, width: '100%', m: '0 auto',
      }}
    >
      <InputBase
        value={searchValue}
        onChange={onChangeSearchInputValue}
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search..."
        inputProps={{ 'aria-label': 'search' }}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};
