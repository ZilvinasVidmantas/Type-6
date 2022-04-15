/* eslint-disable max-len */
import React from 'react';
import { Container } from '@mui/material';
import PricingPageCard from './pricing-page-card';

const plans = [{
  id: 'sadfsdfsd1',
  planName: '1',
  price: '2',
  get: '3',
  off: '4',
}, {
  id: 'sadfsdfsd2',
  planName: '11',
  price: '22',
  get: '33',
  off: '444',
}, {
  id: 'sadfsdfsd3',
  planName: '111',
  price: '222',
  get: '333',
  off: '444',
}];

const Pricing: React.FC = () => (
  <Container sx={{ display: 'flex' }}>
    {plans.map(({ id, ...props }) => <PricingPageCard {...props} />)}
  </Container>
);

export default Pricing;
