import * as React from "react";
import { Routes, Route } from "react-router-dom";

import { AuthProvider } from "./features/auth/auth-context";
import RequireAuth from "./routing/require-auth";
import Layout from "./layouts/layout";

import PublicPage from './pages/public-page';
import ProtectedPage from './pages/protected-page';
import LoginPage from './pages/login-page';


export default function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<PublicPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/protected"
            element={
              <RequireAuth>
                <ProtectedPage />
              </RequireAuth>
            }
          />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

