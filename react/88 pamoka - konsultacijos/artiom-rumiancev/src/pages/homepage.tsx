import {
  Paper, Typography,
} from '@mui/material';
import React from 'react';

const Homepage: React.FC = () => (
  <Paper sx={{ m: 8, p: 5 }}>
    <Typography component="h1" variant="h2" textAlign="center"> Hope you like cheddar, because things are about to get cheesy.</Typography>
    <Typography variant="subtitle2" textAlign="center" sx={{ mt: 3 }}>Pick one of the two cheesy pick-up lines in the navbar</Typography>
  </Paper>
);

export default Homepage;
