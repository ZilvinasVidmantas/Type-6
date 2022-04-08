import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import BasicLayout from './layouts/basic-layout';
import HomePage from './pages/home-page';
import StatePage from './pages/state-page';

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<BasicLayout />}>
        <Route index element={<HomePage />} />
        <Route path="state" element={<StatePage />} />
      </Route>
    </Routes>
  </BrowserRouter>

);

export default App;
