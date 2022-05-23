import React, { useEffect } from 'react';
import {
  Typography,
  Container,
  Grid,
  CircularProgress,
  Box,
  Alert,
} from '@mui/material';

import { useRootSelector } from '../../store';
import ShopPageCard from './shop-page-card';
import { selectShopError, selectShopItems, selectShopItemsLoading } from '../../store/selectors';
import { useRootDispatch } from '../../store/hooks';
import { shopFetchItemsAction } from '../../store/action-creators';

const ShopPage: React.FC = () => {
  const items = useRootSelector(selectShopItems);
  const itemsLoading = useRootSelector(selectShopItemsLoading);
  const error = useRootSelector(selectShopError);
  const dispatch = useRootDispatch();

  useEffect(() => {
    dispatch(shopFetchItemsAction);
  }, []);

  let pageContent = (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <CircularProgress color="primary" size={60} />
    </Box>
  );

  if (!itemsLoading) {
    pageContent = items.length > 0 ? (
      <Grid container spacing={4}>
        {items.map((item) => (
          <Grid item key={item.id} xs={4}>
            <ShopPageCard {...item} />
          </Grid>
        ))}
      </Grid>
    ) : <Typography component="h2" variant="h3" sx={{ my: 3 }}>No items, sorry.</Typography>;
  }

  return (
    <Container>
      <Typography component="h1" variant="h2" sx={{ my: 3 }}>Shop</Typography>
      {error && (
        <Alert color="error" onClose={() => { console.log('Aš tave uždarysiu, ir ne pirtyje.'); }}>{error}</Alert>
      )}
      {pageContent}
    </Container>
  );
};

export default ShopPage;

/*
  Ant klaipos paspaudus 'X' ištrinkite klaidą išsaugota store.shop.error
    * Sukurkite action tipą
    * Sukurkite actions
    * Aprašykite logiką shopReducer'yje kuri reaguotų į action'ą
    * Išsiųskite(dispatch) action ShopPage

*/
