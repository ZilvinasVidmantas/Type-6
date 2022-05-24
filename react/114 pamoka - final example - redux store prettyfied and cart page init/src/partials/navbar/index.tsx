import React from 'react';
import {
  AppBar,
  Box,
  Container,
  Toolbar,
  Divider,
  Badge,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NavbarLink from './navbar-link';
import NavbarAuthMenu from './navbar-auth-menu';
import NavbarVisitorMenu from './navbar-visitor-menu';
import { useRootSelector } from '../../store/hooks';
import { selectLoggedIn } from '../../store/selectors';

const Navbar: React.FC = () => {
  const loggedIn = useRootSelector(selectLoggedIn);

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
            <NavbarLink to="/shop">Shop</NavbarLink>
          </Box>
          <Box sx={{ display: 'flex' }}>
            <NavbarLink to="/cart" sx={{ display: 'inline-flex', gap: 1 }}>
              <Badge badgeContent={4} color="primary">
                <ShoppingCartIcon sx={{ fontSize: 28 }} />
              </Badge>
            </NavbarLink>
            <Divider
              orientation="vertical"
              flexItem
              sx={{
                borderColor: 'primary.main', alignSelf: 'stretch', ml: 2, my: 2,
              }}
            />
            {loggedIn ? <NavbarAuthMenu /> : <NavbarVisitorMenu />}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
