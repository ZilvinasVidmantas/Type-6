import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Container, Typography, Grid, Button, Box,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { Programmer } from '../types';
import ProgrammerCard from '../components/programmer-card';

// Jeigu  naudojant dispatch*** funkciją, perduodate funkciją, tuomet redux-thunk
// kviečią tą funkciją perduodant tokius parametrus:
//  * dispatch - funkcija skirta siųsti action'am į reducer'į
//  * getState - funkcija skirta gauti visą RootState
const dummyAction = (dispatch: any, getState: any) => {
  const allState = getState();
  console.log(allState);
  dispatch({ type: 'DUMMY_ACTION_LOADING' });
  setTimeout(() => {
    dispatch({
      type: 'DUMMY_ACTION_SUCCESS',
    });
  }, 3000);
};

// 5min
// 10min
// 10:40

const HomePage: React.FC = () => {
  const dispatch = useDispatch();
  const [programmers, setProgrammers] = useState<Programmer[]>([]);

  useEffect(() => {
    axios.get<Programmer[]>('http://localhost:8000/programmers?_expand=user')
      .then(({ data }) => setProgrammers(data))
      .catch(console.error);
  }, []);

  const doDummyAction = () => {
    // ***
    dispatch(dummyAction as any);
  };

  return (
    <Container sx={{ my: 5 }}>
      <Typography component="h1" variant="h2" sx={{ textAlign: 'center', mb: 3 }}>
        {programmers.length === 0 ? 'There are no geeks' : 'All geeks'}
      </Typography>
      <Box sx={{ textAlign: 'center', my: 3 }} onClick={doDummyAction}>
        <Button size="large" variant="contained">DO DUMMY ACTION</Button>
      </Box>
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
