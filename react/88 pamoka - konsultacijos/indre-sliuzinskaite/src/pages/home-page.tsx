import {
  Container,
  Paper,
  Typography,
} from '@mui/material';
import React from 'react';

const HomePage: React.FC = () => (
  <Container sx={{ my: 5 }}>
    <Paper sx={{ p: 5 }}>
      <Typography component="h1" variant="h3">
        Įdomios nakvynės
      </Typography>
    </Paper>
  </Container>
);

export default HomePage;
