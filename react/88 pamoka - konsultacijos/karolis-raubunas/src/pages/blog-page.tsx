import React from 'react';
import {
  Typography, Container,
} from '@mui/material';
import Section from '../components/section';
import SwipeableTextMobileStepper from '../components/stepper/stepper';

const BlogPage: React.FC = () => (
  <Container>
    <Typography 
      component="h1" 
      variant="h3"
      sx={{
        color: 'blue.main'
      }}>
        Blog page
    </Typography>

        <Section>
        <SwipeableTextMobileStepper />
      </Section>

  </Container>
);

export default BlogPage;
