import React from 'react';
import { Button } from '@mui/material';
import TempContent from '../../components/page-title';
import theme from '../../styles/theme';
import MyContainer from '../../components/my-container';
import TextSection from '../../components/text-section';

const randomText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur dicta magni, totam quod sit adipisci!';

const AboutPage: React.FC = () => (
  <MyContainer>
    <TempContent pageTitle="About Page" colorProp={theme.palette.aboutPageColor.main} />
    <TextSection text={randomText} />
    <Button color="aboutPageColor" variant="contained">Subscribe</Button>
  </MyContainer>
);

export default AboutPage;
