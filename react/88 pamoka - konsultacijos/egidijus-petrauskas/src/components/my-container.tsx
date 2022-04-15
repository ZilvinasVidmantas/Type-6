import React from 'react';
import { Container } from '@mui/material';

const MyContainer: React.FC = ({ children }) => (
  <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    { children }
  </Container>
);

export default MyContainer;
