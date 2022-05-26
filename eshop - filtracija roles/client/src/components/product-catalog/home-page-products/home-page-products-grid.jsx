import React, { useContext } from 'react';
import { Grid } from '@mui/material';
import { useLocation } from 'react-router-dom';
import Card from './home-page-products-card';
import { ProductContext } from '../contexts/product-context';
import routes from '../../../routing/routes';

const HomePageProductsGrid = () => {
  const { products } = useContext(ProductContext);
  const { pathname } = useLocation();

  let itemsPerRow = 4;
  if (pathname === routes.ProductsPanelPage) {
    itemsPerRow = 3; // padaryti 5 per eilute
  }

  return (
    <Grid container spacing={2}>
      {products.map((props) => (
        <Grid key={props.id} item xs={itemsPerRow}>
          <Card {...props} />
        </Grid>
      ))}
    </Grid>
  );
};

export default HomePageProductsGrid;
