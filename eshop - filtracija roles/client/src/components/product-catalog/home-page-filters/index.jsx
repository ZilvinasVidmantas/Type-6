import React, { useContext } from 'react';
import {
  Paper,
  Typography,
  Divider,
} from '@mui/material';
import OptionsFilter from './options-filter';
import RangeFilter from './range-filter';
import AutocompleteFilter from './autocomplete-filter';
import { ProductContext } from '../contexts/product-context';

const FilterComponentMap = {
  autocomplete: AutocompleteFilter,
  range: RangeFilter,
  options: OptionsFilter,
};

const HomePageFilters = () => {
  const { filters, changeFilter } = useContext(ProductContext);

  return (
    <Paper sx={{ flexBasis: 240, flexShrink: 0, p: 2 }} elevation={3}>
      <Typography variant="h5">Filters</Typography>
      {
        filters.map(({ type, ...props }) => {
          const Filter = FilterComponentMap[type];
          return (
            <React.Fragment key={props.name}>
              <Divider sx={{ my: 2 }} />
              <Filter
                {...props}
                changeFilter={(newProps) => changeFilter(props.name, type, newProps)}
              />
            </React.Fragment>
          );
        })
      }
    </Paper>
  );
};

export default HomePageFilters;
