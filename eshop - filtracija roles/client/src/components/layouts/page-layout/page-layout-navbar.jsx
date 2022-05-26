import React from 'react';
import {
  AppBar,
  Container,
  Box, Badge,
  Divider,
} from '@mui/material';
import { useSelector } from 'react-redux';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Search from './page-layout-search';
import { selectAuth } from '../../../store/auth';
import NavbarLink from '../../navbar-link';
import routes from '../../../routing/routes';
import AuthMenu from '../../auth-menu';

const PageLayoutNavbar = () => {
  const { loggedIn } = useSelector(selectAuth);

  return (
    <AppBar
      position="sticky"
      sx={(theme) => ({
        height: theme.mixins.toolbar.minHeight,
      })}
    >
      <Container sx={{
        height: '100%',
        display: 'flex',
        justifyContent: 'space-between',
      }}
      >
        <Box sx={{ display: 'flex' }}>
          <NavbarLink to={routes.HomePage}>Home</NavbarLink>
        </Box>
        <Search />

        <Box sx={{ display: 'flex', alignItems: 'stretch' }}>
          {
          loggedIn
            ? <AuthMenu />
            : (
              <Box sx={{ display: 'flex' }}>
                <NavbarLink to={routes.LoginPage}>Login</NavbarLink>
                <NavbarLink to={routes.RegisterPage}>Register</NavbarLink>
              </Box>
            )
          }
          <Divider
            orientation="vertical"
            light
            flexItem
            sx={{
              borderColor: 'common.white', my: 2, mr: 2,
            }}
            variant="middle"
          />
          <Badge badgeContent={4} color="secondary" sx={{ alignSelf: 'center' }}>
            <ShoppingCartIcon color="inherit" />
          </Badge>
        </Box>
      </Container>
    </AppBar>
  );
};

export default PageLayoutNavbar;
