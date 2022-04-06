import React from 'react';

const style: React.CSSProperties = {
  display: 'block',
  width: '1200px',
  paddingLeft: '1rem',
  paddingRight: '1rem',
  margin: 'auto',
};

const Container: React.FC = ({ children }) => (
  <div style={style}>{children}</div>
);

export default Container;
