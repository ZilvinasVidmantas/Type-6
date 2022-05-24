import React from 'react';
import {
  Typography,
  Grid,
  IconButton,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const CartPageItemGridProduct: React.FC = () => (
  <Grid container>
    <Grid item xs={2}>
      <Typography variant="h5">Product</Typography>
    </Grid>
    <Grid item xs={3}>
      <Typography variant="h5">Price</Typography>
    </Grid>
    <Grid item xs={3}>
      <Typography variant="h5">Amount</Typography>
    </Grid>
    <Grid item xs={3}>
      <Typography variant="h5">Total</Typography>
    </Grid>
    <Grid item xs={1}>
      <IconButton>
        <DeleteIcon />
      </IconButton>
    </Grid>
  </Grid>
);

export default CartPageItemGridProduct;
