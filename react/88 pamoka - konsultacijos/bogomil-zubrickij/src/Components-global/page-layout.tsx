import { Box } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './navbar';

const PageLayout: React.FC = () => (
  <>
    <NavBar />
    <Box component="main">
      <Outlet />
    </Box>
  </>
);

export default PageLayout;
