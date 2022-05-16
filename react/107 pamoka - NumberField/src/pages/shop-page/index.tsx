import React from 'react';
import {
  Typography,
  Container,
  Grid,
  Box,
} from '@mui/material';

import { useDispatch } from 'react-redux';
import { useRootSelector } from '../../store';
import ShopPageCard from './shop-page-card';

const ShopPage: React.FC = () => {
  const items = useRootSelector((state) => state.items);
  const cart = useRootSelector((state) => state.cart);
  const dispatch = useDispatch();

  const addToCart = (id: string): void => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: { id },
    });
  };

  return (
    <Container>
      <Typography component="h1" variant="h2">Shop</Typography>
      <Grid container spacing={4}>
        {items.map((item) => (
          <Grid item key={item.id} xs={4}>
            <ShopPageCard {...item} addToCart={addToCart} />
          </Grid>
        ))}
      </Grid>
      <Typography component="h2" variant="h2">Cart</Typography>
      <Box component="pre">
        {JSON.stringify(cart, null, 2)}
      </Box>
    </Container>
  );
};

export default ShopPage;
