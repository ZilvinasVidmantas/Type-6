import { Paper, Typography } from '@mui/material';
import React from 'react';

const Line2 = () => (
  <Paper sx={{ m: 8, p: 5 }}>
    <Typography variant="h2" textAlign="center"> You and I are like nachos with jalapeños.</Typography>
    <Typography
      variant="subtitle2"
      textAlign="center"
      sx={{ mt: 3 }}
    >
      I am super cheesy, you are super hot, and we belong together.
    </Typography>
  </Paper>
);

export default Line2;
