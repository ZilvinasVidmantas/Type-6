import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import HomePage from './pages/home-page';
import BlogPage from './pages/blog-page';
import LandingPageLayout from './components/landing-page-layout';
import AboutPage from './pages/about-page';

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPageLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
