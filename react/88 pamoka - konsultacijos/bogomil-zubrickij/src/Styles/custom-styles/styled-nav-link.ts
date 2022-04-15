import { NavLink } from 'react-router-dom';
import { styled } from '@mui/material';

const StyledNavLink = styled(NavLink)(({ theme }) => ({
  fontSize: 18,
  display: 'inline-flex',
  alignItems: 'center',
  padding: theme.spacing(0, 2),
  textDecoration: 'none',
  color: theme.palette.common.white,
  position: 'relative',
  '&:before': {
    content: '\'\'',
    position: 'absolute',
    width: '0',
    height: '7px',
    bottom: '-19px',
    left: '50%',
    transform: 'translate(-50%,0%)',
    backgroundColor: 'red',
    transformOrigin: 'center',
    visibility: 'hidden',
    transition: 'all 0.3s ease-in-out',
  },
  '&:hover:before': {
    visibility: 'visible',
    width: '100%',
  },
  '&.active:before': {
    visibility: 'visible',
    width: '100%',
  },
  '&.active': {
    color: 'red',
  },
}));

export default StyledNavLink;
