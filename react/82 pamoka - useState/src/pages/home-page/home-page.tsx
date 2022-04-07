import React from 'react';
import HomePageMainSection from './sections/home-page-main-section';
import HomePageInfoSection from './sections/home-page-info-section';
import HomePageContentSection from './sections/home-page-content-section';

const Home: React.FC = () => (
  <>
    <HomePageMainSection />
    <HomePageInfoSection />
    <HomePageContentSection />
  </>
);

export default Home;
