import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Button,
} from '@mui/material';
import CartPageItemGrid from './cart-page-item-grid';
import { useRootSelector } from '../../store/hooks';
import { selectCartItemsCount } from '../../store/features/cart/cart-selectors';

const CartPage: React.FC = () => {
  const navigate = useNavigate();
  const itemsCount = useRootSelector(selectCartItemsCount);

  return (
    <Container>
      <Typography component="h1" variant="h2" sx={{ my: 3, mb: 5 }}>Cart</Typography>
      {itemsCount > 0 ? <CartPageItemGrid /> : (
        <>
          <Typography variant="h3" sx={{ mb: 3 }}>Krepšelis tuščias 😒</Typography>
          <Button variant="contained" onClick={() => navigate('/shop')}>← Rinktis prekes</Button>
        </>
      )}

    </Container>
  );
};

export default CartPage;
