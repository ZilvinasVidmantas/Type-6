import React from 'react';
import {
  Container,
  Typography,
} from '@mui/material';
import CartPageItemGrid from './cart-page-item-grid';
import { useRootSelector } from '../../store/hooks';
import { selectCartItemsCount } from '../../store/features/cart/cart-selectors';

const CartPage: React.FC = () => {
  const itemsCount = useRootSelector(selectCartItemsCount);

  return (
    <Container>
      <Typography component="h1" variant="h2" sx={{ my: 3, mb: 5 }}>Cart</Typography>
      {itemsCount > 0 ? <CartPageItemGrid /> : <Typography>Nėra aitemų</Typography>}

    </Container>
  );
};

export default CartPage;
