import React from 'react';
import {
  Box,
} from '@mui/material';
import Header from './home-page-header';
import Filters from './home-page-filters';
import Prodcuts from './home-page-products';
import ProductProvider from './contexts/product-context';

const ProductCatalog = () => (
  <ProductProvider>
    <Box>
      <Header />
      <Box sx={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: 3,
        mt: 3,
      }}
      >
        <Filters />
        <Prodcuts />
      </Box>
    </Box>
  </ProductProvider>
);

export default ProductCatalog;
