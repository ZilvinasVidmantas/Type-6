import React from 'react';
import { Container, Typography } from '@mui/material';

const IspudziaiPage: React.FC = () => (
  <Container sx={{ my: 5 }}>
    <Typography component="h1" variant="h3">
      Įspūdžiai
    </Typography>
    <Typography
      component="a"
      href="https://mui.com/material-ui/react-button/"
      target="blank"
    >
      Įspūdžių galerija
    </Typography>
  </Container>
);

export default IspudziaiPage;
