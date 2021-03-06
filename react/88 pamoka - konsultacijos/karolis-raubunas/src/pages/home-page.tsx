import { Box, Button, Container, Typography, } from '@mui/material';
import React from 'react';
import Btn from '../components/button/button';
import Section from '../components/section';
import customTheme from '../styles/theme';

const HomePage: React.FC = () => (
  <Container>
      <Typography 
        component="h1" 
        variant="h3" 
        sx={{color: 'darkBlue.main'}}>
          Blog Home Page
      </Typography>
      <Section sx={(customTheme) => customTheme.mixins.section}>
        <Btn bgColor={customTheme.palette.secondary.main} textColor={customTheme.palette.common.white}>CUSTOM</Btn>
        <Btn bgColor={customTheme.palette.secondary.light} textColor={customTheme.palette.common.white}>CUSTOM</Btn>
        <Btn bgColor={customTheme.palette.secondary.dark} textColor={customTheme.palette.common.white}>CUSTOM</Btn>
        <Button variant='contained' color='secondary'>TEST</Button>
      </Section>

      <Box sx={(customTheme) => customTheme.mixins.box}>
        <Typography>Custom buttons</Typography>
        <Button variant='contained' color='yellow'>Yellow</Button>
        <Button variant='contained' color='green'>Green</Button>
        <Button variant='contained' color='red'>Red</Button>
      </Box>

      <Section sx={(customTheme) => customTheme.mixins.section}>
        <Box sx={(customTheme) => customTheme.mixins.box}>
          <Typography variant='h1'>IMG</Typography>
          <Typography variant='h2' component='p'>TXT</Typography>
          <Button variant='outlined' color='red'>Read more</Button>
        </Box>
        <Box sx={(customTheme) => customTheme.mixins.box}>
          <Typography variant='h1'>IMG</Typography>
          <Typography variant='h2' component='p'>TXT</Typography>
          <Button variant='outlined' color='red'>Read more</Button>
        </Box>
        <Box sx={(customTheme) => customTheme.mixins.box}>
          <Typography variant='h1'>IMG</Typography>
          <Typography variant='h2' component='p'>TXT</Typography>
          <Button variant='outlined' color='red'>Read more</Button>
        </Box>
      </Section>
  </Container>
);

export default HomePage;
