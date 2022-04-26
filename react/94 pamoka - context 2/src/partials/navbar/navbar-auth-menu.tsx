import React, { useState, useRef } from 'react';
import {
  Avatar, Popper, Box, Paper, MenuList, MenuItem, Divider,
} from '@mui/material';

const NavbarAuthMenu: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const popperAnchorRef = useRef<HTMLDivElement>(null);

  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Box
      ref={popperAnchorRef}
      sx={{ display: 'inline-flex', alignItems: 'center', height: 64 }}
    >
      <Avatar onClick={handleMenuOpen}>HK</Avatar>
      <Popper
        placement="bottom-end"
        anchorEl={popperAnchorRef.current}
        open={menuOpen}
        sx={{ zIndex: 'tooltip' }}
      >
        <Paper
          elevation={3}
          sx={{ width: 320, maxWidth: '100%' }}
        >
          <MenuList>
            <MenuItem>
              ProfilePage
            </MenuItem>
            <Divider />
            <MenuItem>
              Atsijungti
            </MenuItem>
          </MenuList>
        </Paper>
      </Popper>
    </Box>
  );
};

export default NavbarAuthMenu;
