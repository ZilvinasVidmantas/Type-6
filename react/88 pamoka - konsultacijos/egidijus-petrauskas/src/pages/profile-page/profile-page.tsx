import React from 'react';
import { Button } from '@mui/material';
import TempContent from '../../components/page-title';
import theme from '../../styles/theme';
import MyContainer from '../../components/my-container';
import TextSection from '../../components/text-section';

const randomText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur dicta magni, totam quod sit adipisci!';

const ProfilePage: React.FC = () => (
  <MyContainer>
    <TempContent pageTitle="Profile Page" colorProp={theme.palette.profilePageColor.main} />
    <TextSection text={randomText} />
    <Button color="profilePageColor" variant="contained">Subscribe</Button>
  </MyContainer>
);

export default ProfilePage;
