import { Container, Typography } from '@mui/material';
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <Container>
        <Typography 
          component='h1' 
          variant='h3'
          sx={{
            color: 'lightBlue.main'
          }}>
            About Page
        </Typography>
    </Container>
  )
}

export default AboutPage