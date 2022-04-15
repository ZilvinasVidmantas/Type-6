import React from 'react';
import {
  Button,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';
import OutlinedCard from '../../Components-global/outlined-card';

export type PricingPageCardProps = {
  planName: string,
  price: string,
  off: string,
  get: string,
};

const PricingPageCard: React.FC<PricingPageCardProps> = ({
  planName,
  price,
  off,
  get,
}) => (
  <OutlinedCard>
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
        {`Save ${off} off`}
        <br />
        {get}
      </Typography>
    </CardContent>
    <CardActions>
      <Button variant="contained" sx={{ textTransform: 'none' }}>Get Broke ass fuck Plan</Button>
    </CardActions>
  </OutlinedCard>
);

export default PricingPageCard;
