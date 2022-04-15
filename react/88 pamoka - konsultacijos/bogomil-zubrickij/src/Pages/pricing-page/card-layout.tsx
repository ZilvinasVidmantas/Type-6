import React from 'react';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';

export type PropsType = {
  planName: string,
  price: string,
  off: string,
  get: string,
};

export const CardOne = ({
  planName, price, off, get,
}: PropsType) => (

  <>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {planName}
      </Typography>
      <Typography variant="h5" component="div">
        {price}
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        per month
      </Typography>
      <Typography variant="body2">
        Save
        {' '}
        {off}
        {' '}
        off
        <br />
        {get}
      </Typography>
    </CardContent>
    <CardActions>
      <Button variant="contained" sx={{ textTransform: 'none' }}>Get Broke ass fuck Plan</Button>
    </CardActions>
  </>
);
export const OutlinedCard = () => (
  <Box sx={{ minWidth: 275, m: 5 }}>
    <Card variant="outlined" sx={{ bgColor: 'light' }}>{CardOne}</Card>
  </Box>
);
