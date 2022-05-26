import React from 'react';
import {
  Box,
} from '@mui/material';
import Header from './home-page-products-header';
import Grid from './home-page-products-grid';

const HomePageProducts = () => (
  <Box sx={{
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: 3,
  }}
  >
    <Header />
    <Grid />
  </Box>
);

export default HomePageProducts;
