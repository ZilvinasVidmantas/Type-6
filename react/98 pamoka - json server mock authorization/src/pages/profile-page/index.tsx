import React from 'react';
import { Typography, Container } from '@mui/material';

const ProfilePage: React.FC = () => (
  <Container>
    <Typography
      component="h1"
      variant="h1"
      sx={{ textAlign: 'center' }}
    >
      This is profile page
    </Typography>
  </Container>
);

export default ProfilePage;
