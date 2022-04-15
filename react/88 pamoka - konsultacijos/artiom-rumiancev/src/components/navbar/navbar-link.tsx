import { styled } from '@mui/material';
import { NavLink } from 'react-router-dom';
import avocadoTheme from '../../styles/theme';

const StyledNavLink = styled(NavLink)({
  textDecoration: 'none',
  padding: '10px',
  margin: '5px',
  color: avocadoTheme.palette.common.white,
  // border: 3,
  // borderColor: avocadoTheme.palette.primary.dark,

  ':hover': {
    color: avocadoTheme.palette.primary.dark,
  },
  '&.active': {
    boxShadow: `inset 0 - 3px 0 0 ${avocadoTheme.palette.primary.dark}`,
  },
});

export default StyledNavLink;
