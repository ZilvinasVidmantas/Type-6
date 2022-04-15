import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import PageLayout from './Components-global/page-layout';
import Support from './Pages/support-page/support-page';
import About from './Pages/about-page/about-page';
import Pricing from './Pages/pricing-page/pricing-page';
import Home from './Pages/home-page/home-page';

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<PageLayout />}>
        <Route index element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/support" element={<Support />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
