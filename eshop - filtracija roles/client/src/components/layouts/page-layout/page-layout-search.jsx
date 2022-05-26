import React from 'react';
import {
  TextField,
  Paper,
  InputAdornment,
  IconButton,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const PageLayoutSearch = () => (
  <Paper
    component="form"
    sx={{
      p: 0,
      display: 'flex',
      alignItems: 'center',
      width: 400,
      alignSelf: 'center',
    }}
  >
    <TextField
      size="small"
      fullWidth
      InputProps={{
        sx: { pr: 0 },
        endAdornment: (
          <InputAdornment position="end">
            <IconButton color="primary">
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  </Paper>
);

export default PageLayoutSearch;
