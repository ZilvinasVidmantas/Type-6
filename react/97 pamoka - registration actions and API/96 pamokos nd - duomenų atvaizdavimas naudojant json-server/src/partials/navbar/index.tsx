import React, { useContext } from 'react';
import {
  AppBar,
  Box,
  Container,
  Toolbar,
} from '@mui/material';

import NavbarLink from './navbar-link';
import AuthContext from '../../features/auth/auth-context';
import NavbarAuthMenu from './navbar-auth-menu';
import NavbarVisitorMenu from './navbar-visitor-menu';

const Navbar: React.FC = () => {
  const { loggedIn } = useContext(AuthContext);

  return (
    <AppBar position="sticky" sx={{ bgcolor: 'grey.900' }}>
      <Container>
        <Toolbar sx={{
          px: { xs: 0, sm: 0 },
          justifyContent: 'space-between',
        }}
        >
          <Box>
            <NavbarLink to="/">Home</NavbarLink>
          </Box>
          <Box>
            {loggedIn ? <NavbarAuthMenu /> : <NavbarVisitorMenu />}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
