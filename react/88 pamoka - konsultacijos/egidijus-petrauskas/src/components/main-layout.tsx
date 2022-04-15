import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from './navbar';

const MainLayout: React.FC = () => (
  <>
    <Navbar />
    <Box
      component="main"
      sx={{
        display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh',
      }}
    >
      <Outlet />
    </Box>
  </>
);

export default MainLayout;
