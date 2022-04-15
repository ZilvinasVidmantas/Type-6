import React from 'react';
import { Box } from '@mui/material';
import IntroSection from './sections/intro-section';
import InfoSection from './sections/info-section/index';

const HomePage: React.FC = () => (
  <Box component="body" sx={{ width: '100%', height: '100%' }}>
    <IntroSection />
    <InfoSection />
  </Box>
);

export default HomePage;
