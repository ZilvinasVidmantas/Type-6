import React from 'react';
import {
  Typography,
  Container,
  Box,
  Paper,
  Grid,
} from '@mui/material';
import { useRootSelector } from '../../store';
import Img from '../../components/img';

const ShopPage: React.FC = () => {
  const items = useRootSelector((state) => state.items);

  return (
    <Container>
      <Typography component="h1" variant="h2">Shop</Typography>
      <Grid container spacing={4}>
        {items.map(({
          id, amount, categories, images, price,
        }) => (
          <Grid item key={id} xs={4}>
            <Paper elevation={2}>
              <Img src={images[0]} alt="" sx={{ height: 300, width: '100%' }} />
              <Box sx={{ p: 2 }}>
                <Typography>{`price: ${price}€`}</Typography>
                <Typography>{`amount: ${amount}`}</Typography>
                <Typography>{`categories: ${categories.join(', ')}`}</Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ShopPage;
