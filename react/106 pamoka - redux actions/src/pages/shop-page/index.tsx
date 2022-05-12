import React from 'react';
import {
  Typography,
  Container,
  Box,
  Paper,
  Grid,
  Button,
  TextField,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useDispatch } from 'react-redux';
import { useRootSelector } from '../../store';
import Img from '../../components/img';

const ShopPage: React.FC = () => {
  const items = useRootSelector((state) => state.items);
  const cart = useRootSelector((state) => state.cart);
  const dispatch = useDispatch();

  console.table(cart);

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
              <Box sx={{
                display: 'flex', flexDirection: 'column', p: 2, gap: 2,
              }}
              >
                <Box>
                  <Typography>{`price: ${price}€`}</Typography>
                  <Typography>{`amount: ${amount}`}</Typography>
                  <Typography>{`categories: ${categories.join(', ')}`}</Typography>
                </Box>
                <Box sx={{
                  display: 'flex',
                  gap: 0.5,
                }}
                >
                  <TextField
                    size="small"
                    sx={{ alignSelf: 'stretch' }}
                    InputProps={{ sx: { height: '100%' } }}
                    inputProps={{ sx: { height: '100%' } }}
                  />
                  <Box sx={{
                    display: 'flex', flexDirection: 'column', width: 40, gap: 0.5,
                  }}
                  >
                    <Button
                      variant="contained"
                      size="small"
                      sx={{ minWidth: 'initial', p: 1, height: 20 }}
                    >
                      +
                    </Button>
                    <Button
                      variant="contained"
                      size="small"
                      sx={{ minWidth: 'initial', p: 1, height: 20 }}
                    >
                      -
                    </Button>
                  </Box>
                  <Button
                    variant="contained"
                    onClick={() => dispatch({
                      type: 'ADD_TO_CART',
                      payload: { id },
                    })}
                  >
                    <Typography sx={{ pr: 1 }}>Pridėti</Typography>
                    <ShoppingCartIcon />
                  </Button>
                </Box>
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
