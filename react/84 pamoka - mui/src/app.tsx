import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import HomePage from './pages/home-page';
import ButtonsPage from './pages/buttons-page';

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/buttons" element={<ButtonsPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
