import React, { useEffect } from 'react';
import {
  Typography,
  Container,
  Grid,
} from '@mui/material';

import { useRootSelector } from '../../store';
import ShopPageCard from './shop-page-card';
import { selectShopItems } from '../../store/selectors';
import { useRootDispatch } from '../../store/hooks';
import { shopFetchItemsAction } from '../../store/action-creators';

const ShopPage: React.FC = () => {
  const shopItems = useRootSelector(selectShopItems);
  const dispatch = useRootDispatch();

  useEffect(() => {
    dispatch(shopFetchItemsAction);
  }, []);

  return (
    <Container>
      <Typography component="h1" variant="h2" sx={{ my: 3 }}>Shop</Typography>
      {shopItems.length > 0
        ? (

          <Grid container spacing={4}>
            {shopItems.map((item) => (
              <Grid item key={item.id} xs={4}>
                <ShopPageCard {...item} />
              </Grid>
            ))}
          </Grid>
        )
        : <Typography component="h2" variant="h3" sx={{ my: 3 }}>No items, sorry.</Typography>}
    </Container>
  );
};

export default ShopPage;
