import React from 'react';
import { Container, Paper, Typography } from '@mui/material';

const About: React.FC = () => (
  <Container>
    <Paper elevation={6}>
      <Typography component="h1" variant="h2">It`s definetly not a scam!</Typography>
    </Paper>
  </Container>
);

export default About;
