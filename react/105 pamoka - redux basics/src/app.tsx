import React from 'react';
import { Routes, Route } from 'react-router-dom';

// all
import HomePage from './pages/home-page';
import ShopPage from './pages/shop-page/index';
// visitor
import LoginPage from './pages/login-page';
import RegisterPage from './pages/register-page/index';
// auth
import ProfilePage from './pages/profile-page';

import VisitorLayout from './layouts/visitor-layout';
import { AuthProvider } from './features/auth/auth-context';
import RequireAuth from './routing/require-auth';
import RequireVisitor from './routing/require-visitor';

const App: React.FC = () => (
  <AuthProvider>
    <Routes>
      <Route path="/" element={<VisitorLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route
          path="auth/login"
          element={(
            <RequireVisitor>
              <LoginPage />
            </RequireVisitor>
          )}
        />
        <Route
          path="auth/register"
          element={(
            <RequireVisitor>
              <RegisterPage />
            </RequireVisitor>
          )}
        />
        <Route
          path="profile"
          element={(
            <RequireAuth>
              <ProfilePage />
            </RequireAuth>
          )}
        />
      </Route>
    </Routes>
  </AuthProvider>
);

export default App;
