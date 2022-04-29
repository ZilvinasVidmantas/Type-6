import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Container,
  Box,
  Paper,
  Typography,
  Grid,
  Button,
  styled,
} from '@mui/material';

type Programmer = {
  id: string,
  name: string,
  surname: string,
  languages: string[],
  technologies: string[],
  img: string,
  yearsOfExperience: number,
};

const Img = styled('img')({
  width: '100%',
  height: 270,
  objectFit: 'cover',
  objectPosition: 'top',
});

const HomePage: React.FC = () => {
  const [programmers, setProgrammers] = useState<Programmer[]>([]);

  useEffect(() => {
    // fetch('http://localhost:8000/programmers')
    //   .then((response) => response.json())
    //   .then((fetchedProgrammers) => {
    //     setProgrammers(fetchedProgrammers as Programmer[]);
    //   })
    //   .catch(console.error);

    axios.get<Programmer[]>('http://localhost:8000/programmers')
      .then((axiosResponse) => {
        setProgrammers(axiosResponse.data);
      })
      .catch(console.error);
  }, []);

  return (
    <Container sx={{ my: 5 }}>
      <Typography component="h1" variant="h2" sx={{ textAlign: 'center', mb: 3 }}>
        {programmers.length === 0 ? 'You have no geeks' : 'Your geeks'}
      </Typography>
      <Grid container spacing={3}>
        {programmers.map(({
          id, name, surname, languages, technologies, img, yearsOfExperience,
        }) => (
          <Grid key={id} item xs={4}>
            <Paper sx={{ p: 3 }} elevation={3}>
              <Img src={img} alt="" />
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Typography
                  variant="h5"
                  sx={{ textAlign: 'center' }}
                >
                  {`${name} ${surname}`}
                </Typography>
                <Box>
                  <Typography variant="h6">Languages</Typography>
                  <Typography sx={{ pl: 3 }}>{languages.join(', ')}</Typography>
                </Box>
                <Box>
                  <Typography variant="h6">Technologies</Typography>
                  <Typography sx={{ pl: 3 }}>{technologies.join(', ')}</Typography>
                </Box>
                <Box>
                  <Typography variant="h6">Experience</Typography>
                  <Typography sx={{ pl: 3 }}>{`${yearsOfExperience} years`}</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
                  <Button variant="contained" color="primary">I am crazy</Button>
                  <Button variant="contained" color="info">Call me maybe</Button>
                </Box>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default HomePage;
