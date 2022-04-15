import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import HomePage from './pages/home-page';
import AboutPage from './pages/about-page/about-page';
import ProfilePage from './pages/profile-page/profile-page';
import MainLayout from './components/main-layout';

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="profile" element={<ProfilePage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
