import React from 'react';
import {
  Box, MenuItem, TextField, Typography,
} from '@mui/material';
import iconMap from '../../../../data/icon-map';

const selectOptions = Object.entries(iconMap).reduce((iconOptions, [title, Icon]) => [
  ...iconOptions,
  {
    title,
    Icon,
  },
], []);

const CategoryPanelPageIconSelect = ({ value, onChange }) => (
  <Box sx={{
    display: 'flex', alignItems: 'center', gap: 2,
  }}
  >
    <TextField
      select
      label="Ikona"
      value={value}
      onChange={onChange}
      fullWidth
      inputProps={{
        sx: { width: '100%', display: 'flex' },
      }}
    >
      {selectOptions.map(({ title, Icon }) => (
        <MenuItem key={title} value={title}>
          <Icon sx={{ mr: 2 }} />
          <Typography>{title}</Typography>
        </MenuItem>
      ))}
    </TextField>
  </Box>
);

export default CategoryPanelPageIconSelect;
