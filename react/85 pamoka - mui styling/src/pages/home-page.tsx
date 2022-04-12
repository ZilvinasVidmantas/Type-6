import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import Navbar from '../components/navbar';

const HomePage: React.FC = () => (
  <>
    <Navbar />
    <Box component="main">
      <Container>
        <Typography component="h1">React CodeAcademy page</Typography>
      </Container>
    </Box>
  </>
);

export default HomePage;
