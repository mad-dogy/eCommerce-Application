import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';

export const SearchInput = () => (
  <Paper
    component="form"
    sx={{
      p: '0 2px', display: 'flex', alignItems: 'center', maxWidth: 600, width: '100%', m: '0 auto',
    }}
  >
    <InputBase
      sx={{ ml: 1, flex: 1 }}
      placeholder="Search..."
      inputProps={{ 'aria-label': 'search' }}
    />
    <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
      <SearchIcon />
    </IconButton>
  </Paper>
);
