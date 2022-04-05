import React from 'react';
import Navbar from './components/navbar';
import MainSection from './sections/main-section';
import InfoSection from './sections/info-section';
import ContentSection from './sections/content-section';

const App: React.FC = () => (
  <>
    <Navbar />
    <MainSection />
    <InfoSection />
    <ContentSection />
  </>
);

export default App;
