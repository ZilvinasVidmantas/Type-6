import React from 'react';
import { Typography, Button, Box } from '@mui/material';

const ButtonsPage: React.FC = () => (
  <Box
    component="main"
    sx={{
      bgcolor: 'grey.500',
      ':hover': {
        bgcolor: 'primary.main',
      },
    }}
  >
    <Typography component="h1" variant="h1">Buttons</Typography>
    <Button variant="contained">contained</Button>
    <Button variant="text">text</Button>
    <Button variant="outlined">outlined</Button>
  </Box>
);

export default ButtonsPage;
