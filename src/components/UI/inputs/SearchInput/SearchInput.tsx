import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

interface SearchInputProps {
  search: {query: string};
  setSearch: React.Dispatch<React.SetStateAction<{
    query: string;
  }>>;
}

export const SearchInput = (props: SearchInputProps) => {
  const { search, setSearch } = props;
  return (
    <Paper
      component="form"
      sx={{
        p: '0 2px', display: 'flex', alignItems: 'center', maxWidth: 600, width: '100%', m: '0 auto',
      }}
    >
      <InputBase
        value={search.query}
        onChange={event => setSearch({ query: event.target.value })}
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
