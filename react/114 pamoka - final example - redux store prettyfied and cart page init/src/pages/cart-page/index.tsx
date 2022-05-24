import React from 'react';
import {
  Container,
  Typography,
} from '@mui/material';
import CartPageItemGrid from './cart-page-item-grid';

const CartPage: React.FC = () => (

  <Container>
    <Typography component="h1" variant="h2" sx={{ my: 3, mb: 5 }}>Cart</Typography>
    <CartPageItemGrid />
  </Container>
);

export default CartPage;
