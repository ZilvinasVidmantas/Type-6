import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DefaultLayout from './components/default-layout';

// puslapiai
import Homepage from './pages/homepage';
import Line1 from './pages/line1';
import Line2 from './pages/line2';
import NamuDarbai from './pages/ND';
import PetTinder from './pages/pet-tinder';

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Homepage />} />
        <Route path="line1" element={<Line1 />} />
        <Route path="line2" element={<Line2 />} />
        <Route path="namuDarbai" element={<NamuDarbai />} />
        <Route path="petTinder" element={<PetTinder />} />
      </Route>
    </Routes>
  </BrowserRouter>

);

export default App;
