import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography, Grid } from '@mui/material';
import { Programmer } from '../types';
import ProgrammerCard from '../components/programmer-card';

const HomePage: React.FC = () => {
  const [programmers, setProgrammers] = useState<Programmer[]>([]);

  useEffect(() => {
    axios.get<Programmer[]>('http://localhost:8000/programmers?_expand=user')
      .then(({ data }) => setProgrammers(data))
      .catch(console.error);
  }, []);

  return (
    <Container sx={{ my: 5 }}>
      <Typography component="h1" variant="h2" sx={{ textAlign: 'center', mb: 3 }}>
        {programmers.length === 0 ? 'There are no geeks' : 'All geeks'}
      </Typography>
      <Grid container spacing={6}>
        {programmers.map(({ id, ...programmerProps }) => (
          <Grid key={id} item xs={12} lg={4}>
            <ProgrammerCard {...programmerProps} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default HomePage;
