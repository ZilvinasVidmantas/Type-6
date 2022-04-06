import React from 'react';

const style: React.CSSProperties = {
  display: 'block',
  height: 60,
  padding: 10,
};

const NavbarLogo: React.FC = () => (
  <img src="/assets/logo.svg" alt="page logo" style={style} />
);

export default NavbarLogo;
