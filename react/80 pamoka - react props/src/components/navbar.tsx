import React from 'react';
import theme from '../theme/theme';
import Container from './container';

const style: React.CSSProperties = {
  position: 'fixed',
  top: '0px',
  left: '0px',
  right: '0px',
  backgroundColor: 'black',
  color: 'white',
  height: theme.navbarHeight,
};

const Navbar: React.FC = () => (
  <div style={style}>
    <Container>
      Navbar
    </Container>
  </div>
);

export default Navbar;
