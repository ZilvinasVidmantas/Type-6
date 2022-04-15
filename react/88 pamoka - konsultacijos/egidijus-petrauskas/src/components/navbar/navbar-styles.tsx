import { styled, AppBar } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const ToolBarStyle = {
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: 0,
  height: '100%',
  width: '90%',
  minHeight: 55,
  padding: 0,
};

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  height: 55,
  background: theme.palette.secondary.main,
}));

export const StyledLink = styled(NavLink)(({ theme }) => ({
  width: '33.5%',
  height: '100%',
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: theme.palette.common.white,
  transition: '0.3s',

  '&.active': {
    background: theme.palette.secondary.light,
    color: theme.palette.secondary.dark,
  },

  ':hover': {
    boxShadow: `inset 0 -5px 0 0 ${theme.palette.secondary.light}`,
  },
}));
