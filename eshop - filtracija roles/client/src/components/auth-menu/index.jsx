import React, { useState, useRef } from 'react';
import {
  Box,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  Divider,
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonIcon from '@mui/icons-material/Person';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { logout, selectAuth } from '../../store/auth';
import routes from '../../routing/routes';

const NavbarMenu = () => {
  const navigate = useNavigate();
  const { user } = useSelector(selectAuth);
  const iconButtonRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleProfileLinkClick = () => {
    handleClose();
    navigate(routes.ProfilePage);
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Typography fontSize={14}>{`${user.name} ${user.surname}`}</Typography>
      <Divider
        orientation="vertical"
        light
        flexItem
        sx={{
          borderColor: 'common.white', my: 2, ml: 2,
        }}
        variant="middle"
      />
      <IconButton
        size="large"
        onClick={handleOpen}
        color="inherit"
        ref={iconButtonRef}
      >
        <AccountCircleIcon />
      </IconButton>
      <Menu
        anchorEl={iconButtonRef.current}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        open={isOpen}
        onClose={handleClose}
      >
        <MenuItem onClick={handleProfileLinkClick} sx={{ display: 'flex', justifyContent: 'space-between', gap: 1 }}>
          <Typography textAlign="center">Profile</Typography>
          <PersonIcon />
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleLogout} sx={{ display: 'flex', justifyContent: 'space-between', gap: 1 }}>
          <Typography textAlign="center">Logout</Typography>
          <PowerSettingsNewIcon />
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default NavbarMenu;
