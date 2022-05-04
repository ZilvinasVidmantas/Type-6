import React from 'react';
import { Box, TextField, MenuItem } from '@mui/material';

type SortingSelectProps = {
  onChange: (a: string) => void,
};

const SortingSelect: React.FC<SortingSelectProps> = ({ onChange }) => (
  <Box>
    <TextField
      select
      label="Select sorting"
      onChange={(e) => onChange(e.target.value)}
      sx={{ minWidth: 300, mb: 2 }}
    >
      <MenuItem value="-1">...select filter</MenuItem>
      <MenuItem value="name-asc">Name ASC</MenuItem>
      <MenuItem value="surname-asc">Surname ASC</MenuItem>
      <MenuItem value="height-asc">Height ASC</MenuItem>
      <MenuItem value="weight-asc">Weight ASC</MenuItem>
      <MenuItem value="name-desc">Name DESC</MenuItem>
      <MenuItem value="surname-desc">Surname DESC</MenuItem>
      <MenuItem value="height-desc">Height DESC</MenuItem>
      <MenuItem value="weight-desc">Weight DESC</MenuItem>
    </TextField>
  </Box>
);

export default SortingSelect;
