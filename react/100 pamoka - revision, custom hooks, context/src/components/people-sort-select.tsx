import React from 'react';
import { TextField, MenuItem } from '@mui/material';

type PeopleSortSelectProps = {
  value: string,
  options: string[],
  onChange: (a: string) => void,
};

const PeopleSortSelect: React.FC<PeopleSortSelectProps> = ({
  value,
  options,
  onChange,
}) => (
  <TextField
    select
    label="Select sorting"
    onChange={(e) => onChange(e.target.value)}
    value={value}
    sx={{ minWidth: 300, mb: 2 }}
  >
    <MenuItem value="-1">...select order</MenuItem>
    {options.map((option) => (
      <MenuItem key={option} value={option}>{option}</MenuItem>
    ))}
  </TextField>
);

export default PeopleSortSelect;
