import React, { useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import { useRootDispatch, useRootSelector } from '../store/hooks';
import { selectShopCategories } from '../store/features/shop/shop-selectors';
import { shopFetchCategoriesActionThunk } from '../store/features/shop/shop-action-creators';

const HomePage: React.FC = () => {
  const dispatch = useRootDispatch();
  const categories = useRootSelector(selectShopCategories);
  console.log(categories);

  useEffect(() => {
    dispatch(shopFetchCategoriesActionThunk);
  }, []);

  return (
    <Container sx={{ my: 5 }}>
      <Typography component="h1" variant="h2" sx={{ textAlign: 'center', mb: 3 }}>
        This is Home page
      </Typography>
    </Container>
  );
};

export default HomePage;
