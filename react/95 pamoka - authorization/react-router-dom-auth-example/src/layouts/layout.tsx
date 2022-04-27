import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import AuthStatus from '../components/auth-status';
import { Box, List, ListItemButton, Paper } from '@mui/material';

function Layout() {
  return (
    <Box>
      <AuthStatus />
      <Paper sx={{ width: 300, my: 2 }}>
        <List>
          <ListItemButton >
            <Link to="/">Public Page</Link>
          </ListItemButton >
          <ListItemButton >
            <Link to="/protected">Protected Page</Link>
          </ListItemButton >
        </List>
      </Paper>
      <Outlet />
    </Box>
  );
}

export default Layout;