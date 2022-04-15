import React from 'react';
import {
  Container, Typography, Button,
} from '@mui/material';
import { IntroSectionContainer, IntroSectionContentContainer, IntroSectionContentTitle } from './intro-section-styles';
import theme from '../../../../styles/theme';

const IntroSection: React.FC = () => (
  <IntroSectionContainer component="section">
    <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>

      <IntroSectionContentContainer component="article">

        <IntroSectionContentTitle variant="h2">
          This is
          {' '}
          <Typography variant="h2" component="span" sx={{ color: theme.palette.profilePageColor.main, fontWeight: 500 }}>YOUR</Typography>
          {' '}
          best title
          {' '}
          <Typography variant="h2" component="span" sx={{ color: theme.palette.profilePageColor.main, fontWeight: 500 }}>EVER!</Typography>
        </IntroSectionContentTitle>

        <Typography variant="h5" sx={{ color: theme.palette.aboutPageColor.main }}>Here is some more random very very cool things!</Typography>

        <Button
          color="homePageColor"
          variant="contained"
          sx={{ width: 100 }}
          onClick={(e) => {
            e.preventDefault();
            window.open(
              'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley',
              '_blank',
            );
          }}
        >
          Agree
        </Button>

      </IntroSectionContentContainer>

    </Container>
  </IntroSectionContainer>
);

export default IntroSection;
