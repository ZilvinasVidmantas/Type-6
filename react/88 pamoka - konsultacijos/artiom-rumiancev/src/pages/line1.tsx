import { Paper, Typography } from '@mui/material';
import React from 'react';

const Line1: React.FC = () => (
  <Paper sx={{ m: 8, p: 5 }}>
    <Typography variant="h2" textAlign="center"> Are you WiFi?</Typography>
    <Typography
      variant="subtitle2"
      textAlign="center"
      sx={{ mt: 3 }}
    >
      Cause I am totally feeling a connection.
    </Typography>
  </Paper>
);

export default Line1;
