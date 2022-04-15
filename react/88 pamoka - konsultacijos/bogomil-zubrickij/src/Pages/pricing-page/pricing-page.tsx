/* eslint-disable max-len */
import React from 'react';
import { Container } from '@mui/material';
import { OutlinedCard, CardOne, PropsType } from './card-layout';

const Pricing: React.FC = (props:PropsType) => (
  <Container sx={{ display: 'flex' }}>
    <OutlinedCard planName="1" price="2" get="3" off="4" />
    <OutlinedCard planName="11" price="22" get="33" off="444" />
    <OutlinedCard planName="111" price="222" get="333" off="444" />
  </Container>
);

export default Pricing;
