import { Container, Typography } from '@mui/material';
import React from 'react';
import Navbar from '../../components/partials/navbar';

const HomePage: React.FC = () => (
  <>
    <Navbar />
    <Container>
      <Typography>Home</Typography>
    </Container>
  </>
);

export default HomePage;
