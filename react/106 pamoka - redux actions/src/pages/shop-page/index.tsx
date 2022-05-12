import React from 'react';
import {
  Typography,
  Container,
  Box,
  Paper,
  Grid,
  Button,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useRootSelector } from '../../store';
import Img from '../../components/img';

const ShopPage: React.FC = () => {
  const items = useRootSelector((state) => state.items);
  const cart = useRootSelector((state) => state.cart);

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
              <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 2 }}>
                <Box>
                  <Typography>{`price: ${price}€`}</Typography>
                  <Typography>{`amount: ${amount}`}</Typography>
                  <Typography>{`categories: ${categories.join(', ')}`}</Typography>
                </Box>
                <Button variant="contained" sx={{ alignSelf: 'flex-end' }}>
                  <ShoppingCartIcon />
                </Button>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
      <Typography component="h2" variant="h2">Cart</Typography>
      {cart ? 'Ateityje busiu itemų lenmtelė' : 'dar nieko neįdėta'}
    </Container>
  );
};

export default ShopPage;
