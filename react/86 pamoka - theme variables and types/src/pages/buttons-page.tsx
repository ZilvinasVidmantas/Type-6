import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
} from '@mui/material';

const ButtonsPage: React.FC = () => (
  <Container sx={{ my: 5 }}>
    <Typography component="h1" variant="h3">Buttons</Typography>
    <Typography component="a" href="https://mui.com/material-ui/react-button/" target="blank">Documentation</Typography>
    <Box sx={{ mt: 4 }}>
      <Button variant="contained">contained</Button>
      <Button variant="text">text</Button>
      <Button variant="outlined">outlined</Button>
      <Button variant="outlined" href="https://google.lt">Google</Button>
    </Box>
  </Container>
);

export default ButtonsPage;
