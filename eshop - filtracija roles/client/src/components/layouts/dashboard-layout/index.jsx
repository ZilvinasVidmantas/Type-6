import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { Box, Fab, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import { selectAuth } from '../../../store/auth';
import DrawerHeader from './dashboard-layout-drawer-header';
import Navbar from './dashboard-layout-navbar';
import Drawer from './dashboard-layout-drawer';

const DashboardLayout = () => {
  const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.up('lg'));
  const { user } = useSelector(selectAuth);
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);
  const handleDrawerToggle = () => setOpen(!open);

  return (
    <Box sx={{ display: 'flex' }}>
      <Navbar
        open={isLargeScreen || open}
        handleDrawerOpen={handleDrawerOpen}
      />
      <Drawer
        open={isLargeScreen || open}
        user={user}
        handleDrawerClose={handleDrawerClose}
      />
      <Box component="main" sx={{ flexGrow: 1, p: 3, pt: 0 }}>
        <DrawerHeader />
        <Box sx={{ pt: 3 }}>
          <Outlet />
        </Box>
      </Box>

      <Fab
        color="primary"
        sx={{
          position: 'fixed',
          bottom: 20,
          right: 20,
          display: { xs: 'inline-flex', md: 'none' },
        }}
        onClick={handleDrawerToggle}
      >
        { open ? <CloseIcon /> : <MenuIcon />}
      </Fab>
    </Box>
  );
};

export default DashboardLayout;
