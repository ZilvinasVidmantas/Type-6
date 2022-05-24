import React from 'react';
import { Box } from '@mui/material';
import CartPageItemGridHeader from './cart-page-item-grid-header';
import CartPageItemGridProduct from './cart-page-item-grid-product';

const CartPageItemGrid: React.FC = () => (
  <Box sx={{ display: 'flex', flexDirection: 'column', columnGap: 2 }}>
    <CartPageItemGridHeader />
    <CartPageItemGridProduct />
    <CartPageItemGridProduct />
    <CartPageItemGridProduct />
    <CartPageItemGridProduct />
    <CartPageItemGridProduct />
    <CartPageItemGridProduct />
    <CartPageItemGridProduct />
  </Box>
);

export default CartPageItemGrid;
