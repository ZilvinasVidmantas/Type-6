import React from 'react';
import { Typography, Container } from '@mui/material';
import { NavLink } from 'react-router-dom';

const HomePage: React.FC = () => (
  <Container>
    <Typography
      component="h1"
      variant="h1"
      sx={{ textAlign: 'center' }}
    >
      This is home page
    </Typography>
    <ul>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/auth/login">Login</NavLink></li>
      <li><NavLink to="/profile">Profile</NavLink></li>
    </ul>
  </Container>
);

export default HomePage;
