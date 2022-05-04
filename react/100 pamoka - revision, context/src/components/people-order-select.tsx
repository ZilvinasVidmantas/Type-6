import React from 'react';
import { TextField, MenuItem } from '@mui/material';

type PeopleOrderSelectProps = {
  value: string,
  onChange: (a: string) => void,
};

const PeopleOrderSelect: React.FC<PeopleOrderSelectProps> = ({ value, onChange }) => (
  <TextField
    select
    label="Select sorting"
    onChange={(e) => onChange(e.target.value)}
    value={value}
    sx={{ minWidth: 300, mb: 2 }}
  >
    <MenuItem value="-1">...select order</MenuItem>
    <MenuItem value="name-asc">Name ASC</MenuItem>
    <MenuItem value="surname-asc">Surname ASC</MenuItem>
    <MenuItem value="height-asc">Height ASC</MenuItem>
    <MenuItem value="weight-asc">Weight ASC</MenuItem>
    <MenuItem value="name-desc">Name DESC</MenuItem>
    <MenuItem value="surname-desc">Surname DESC</MenuItem>
    <MenuItem value="height-desc">Height DESC</MenuItem>
    <MenuItem value="weight-desc">Weight DESC</MenuItem>
  </TextField>
);

export default PeopleOrderSelect;
