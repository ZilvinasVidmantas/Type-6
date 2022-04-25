import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import HomePage from './pages/home-page';
import ProfilePage from './pages/profile-page';
import LoginPage from './pages/login-page';
import VisitorLayout from './layouts/visitor-layout';

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<VisitorLayout />}>
        <Route index element={<HomePage />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="auth/login" element={<LoginPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
