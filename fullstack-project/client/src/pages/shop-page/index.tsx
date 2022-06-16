import React, { useEffect } from 'react';
import {
  Typography,
  Container,
  Grid,
  CircularProgress,
  Box,
  Alert,
} from '@mui/material';

import { useRootSelector, useRootDispatch } from '../../store/hooks';
import { selectShopError, selectShopProducts, selectShopLoading } from '../../store/selectors';
import { shopClearErrorAction, shopFetchProductsActionThunk } from '../../store/action-creators';
import ShopPageCard from './shop-page-card';
import ShopCategoryHeader from './shop-category-header';

const ShopPage: React.FC = () => {
  const items = useRootSelector(selectShopProducts);
  const itemsLoading = useRootSelector(selectShopLoading);
  const error = useRootSelector(selectShopError);
  const dispatch = useRootDispatch();

  useEffect(() => {
    dispatch(shopFetchProductsActionThunk);
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
    ) : <Typography component="h2" variant="h3" sx={{ my: 3 }}>Parduotuvė tuščia.</Typography>;
  }

  return (
    <Container sx={{ mt: 6 }}>
      {error && (
        <Alert color="error" onClose={() => dispatch(shopClearErrorAction)}>{error}</Alert>
      )}
      <ShopCategoryHeader />
      {pageContent}
    </Container>
  );
};

export default ShopPage;
