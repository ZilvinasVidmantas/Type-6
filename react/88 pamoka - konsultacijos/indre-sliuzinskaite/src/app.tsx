import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import HomePage from './pages/home-page';
import VietovesPage from './pages/vietoves-page';
import IspudziaiPage from './pages/ispudziai-page';
import LandingPageLayout from './components/landing-page-layout';

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPageLayout />}>
        <Route index element={<HomePage />} />
        <Route path="vietoves" element={<VietovesPage />} />
        <Route path="ispudziai" element={<IspudziaiPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
