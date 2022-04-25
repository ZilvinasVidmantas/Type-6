import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import HomePage from './pages/home-page';
import ProfilePage from './pages/profile-page';

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
  </BrowserRouter>
);

export default App;
