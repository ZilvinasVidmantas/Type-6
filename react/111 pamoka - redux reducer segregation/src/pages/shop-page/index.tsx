import React from 'react';
import {
  Typography,
  Container,
  Grid,
  Box,
} from '@mui/material';

import { useRootSelector } from '../../store';
import ShopPageCard from './shop-page-card';
import { selectCartItems, selectShopItems } from '../../store/selectors';

const ShopPage: React.FC = () => {
  const shopItems = useRootSelector(selectShopItems);
  const cartItems = useRootSelector(selectCartItems);

  return (
    <Container>
      <Typography component="h1" variant="h2">Shop</Typography>
      <Grid container spacing={4}>
        {shopItems.map((item) => (
          <Grid item key={item.id} xs={4}>
            <ShopPageCard {...item} />
          </Grid>
        ))}
      </Grid>
      <Typography component="h2" variant="h2">Cart</Typography>
      <Box component="pre">
        {JSON.stringify(cartItems, null, 2)}
      </Box>
    </Container>
  );
};

export default ShopPage;
