import React, { useContext } from 'react';
import { TextField, MenuItem } from '@mui/material';
import PeopleContext from '../contexts/people-context';

const PeopleSortSelect: React.FC = () => {
  const { sortingTypes, sorting, setSorting } = useContext(PeopleContext);

  return (
    <TextField
      select
      label="Select sorting"
      onChange={(e) => setSorting(e.target.value)}
      value={sorting}
      sx={{ minWidth: 300, mb: 2 }}
    >
      <MenuItem value="-1">...select order</MenuItem>
      {sortingTypes.map((option) => (
        <MenuItem key={option} value={option}>{option}</MenuItem>
      ))}
    </TextField>
  );
};

export default PeopleSortSelect;
