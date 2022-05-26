import React from 'react';
import {
  styled,
  AppBar,
  Box,
  IconButton,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import AuthMenu from '../../auth-menu';
import NavbarLink from '../../navbar-link';
import routes from '../../../routing/routes';

const StyledDashboardLayoutNavbar = styled(AppBar, {
  shouldForwardProp: (prop) => !['open'].includes(prop),
})(({ theme, open }) => {
  const drawerWidth = theme.mixins.drawer.width;
  const { create, easing, duration } = theme.transitions;

  const transition = create(['width', 'margin'], {
    easing: easing.sharp,
    duration: duration.shorter,
  });

  return {
    height: theme.mixins.toolbar.minHeight,
    [theme.breakpoints.up('md')]: {
      zIndex: theme.zIndex.drawer + 1,
      transition,
      ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition,
      }),
    },
    [theme.breakpoints.up('lg')]: {
      marginLeft: 0,
      width: '100%',
    },
  };
});

const DashboardLayoutNavbar = ({ open, handleDrawerOpen }) => (
  <StyledDashboardLayoutNavbar position="fixed" open={open}>
    <Box
      maxWidth="xxl"
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        height: 1 / 1,
        pl: { md: 3 },
      }}
    >
      <Box sx={{ display: 'flex' }}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            marginRight: '36px',
            display: {
              xs: 'none',
              md: open ? 'none' : 'inline-flex',
            },
          }}
        >
          <MenuIcon />
        </IconButton>
        <NavbarLink to={routes.HomePage}>Home</NavbarLink>
      </Box>
      <AuthMenu />
    </Box>
  </StyledDashboardLayoutNavbar>
);

export default DashboardLayoutNavbar;
