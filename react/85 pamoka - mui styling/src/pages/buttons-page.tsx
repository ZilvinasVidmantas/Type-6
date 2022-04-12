import React from 'react';
import { Typography, Button, Box } from '@mui/material';

const ButtonsPage: React.FC = () => (
  <Box component="main">
    <Typography component="h1" variant="h1">Buttons</Typography>
    <Typography component="a" href="https://mui.com/material-ui/react-button/" target="blank">Documentation</Typography>
    <Box sx={{ mt: 4 }}>
      <Button variant="contained">contained</Button>
      <Button variant="text">text</Button>
      <Button variant="outlined">outlined</Button>
      <Button variant="outlined" href="https://google.lt">Google</Button>
    </Box>
  </Box>
);

export default ButtonsPage;
